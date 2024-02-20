const IAS = require("../models/ias");

const getIas = async (req, res, next) => {
  try {
    const ias = await IAS.find();
    return res.json(ias);
  } catch (error) {
    return res.status(400).json("Error al hacer el get by Id");
  }
};

const getIaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ia = await IAS.findById(id);
    return res.json(ia);
  } catch (error) {
    return res.status(400).json("Error al hacer el get by Id");
  }
};

const getIasByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const ias = await IAS.find({ category });
    return res.json(ias);
  } catch (error) {
    return res.status(400).json("Error al hacer el get by categories");
  }
};

const postIas = async (req, res, next) => {
  try {
    const newIA = new IAS(req.body);
    const ia = await newIA.save();
    return res.status(201).json(ia);
  } catch (error) {
    return res.status(400).json("Error al hacer el post de la ia");
  }
};

const deleteIas = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ia = await IAS.findByIdAndDelete(id);
    return res.json(ia)
  } catch (error) {
    return res.status(400).json("Error al hacer el delete de la ia");
  }
};

module.exports = {
  getIas,
  getIaById,
  getIasByCategory,
  postIas,
  deleteIas,
};
