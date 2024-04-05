const Foro = require("../models/foro");

const postForo = async (req, res, next) => {
  try {
    const newForo = new Foro(req.body);
    newForo.comments = [];
    const foro = await newForo.save();
    return res.status(201).json(foro);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const addCommentToForo = async (req, res, next) => {
  try {
    const { id, idComment } = req.params;

    const foro = await Foro.findByIdAndUpdate(
      id,
      { $push: { comments: idComment } },
      {
        new: true,
      }
    ).populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });

    return res.status(200).json(foro);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getForos = async (req, res, next) => {
  try {
    const foros = await Foro.find();
    return res.status(200).json(foros);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getForoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foro = await Foro.findById(id).populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });
    return res.status(200).json(foro);
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = { postForo, addCommentToForo, getForos, getForoById };
