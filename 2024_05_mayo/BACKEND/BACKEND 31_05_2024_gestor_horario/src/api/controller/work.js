const Work = require("../models/work");

const getWorks = async (req, res, next) => {
  try {
    const works = await Work.find();
    return res.status(200).json(works);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const getWorkFilter = async (req, res, next) => {
  try {
    const { location } = req.params;
    const works = await Work.find({ location }).populate("registers");
    return res.status(200).json(works);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const postWork = async (req, res, next) => {
  try {
    const work = new Work(req.body);
    const w = await work.save();
    return res.status(201).json(w);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const updateWork = async (req, res, next) => {
  try {
    const { registerData, idWork } = req;
    await Work.findByIdAndUpdate(idWork, {
      $push: { registers: registerData },
    });
    return res.status(201).json("Todo ha sido un éxito");
  } catch (error) {
    return res.status(400).json("Error");
  }
};

module.exports = {
  getWorks,
  getWorkFilter,
  postWork,
  updateWork,
};
