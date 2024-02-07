const Shelving = require("../models/shelving");

const postShelving = async (req, res) => {
  try {
    const newShelving = new Shelving(req.body);
    const shelvingSaved = await newShelving.save();
    return res.status(201).json({
      message: "Estantería creada correctamente",
      shelving: shelvingSaved,
    });
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getShelvings = async (req, res) => {
  try {
    const shelvings = await Shelving.find();
    return res.status(201).json(shelvings);
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = {
  postShelving,
  getShelvings
};
