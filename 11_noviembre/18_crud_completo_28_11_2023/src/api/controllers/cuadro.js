const Cuadro = require("../models/cuadro");

//? CRUD - CREATE - READ - UPDATE - DELETE

//! CREATE
const postCuadro = async (req, res, next) => {
  try {
    const newCuadro = new Cuadro(req.body);
    const cuadroSaved = await newCuadro.save();
    return res.status(201).json(cuadroSaved);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

//! READ
const getCuadros = async (req, res, next) => {
  try {
    const allCuadros = await Cuadro.find().populate("artist");
    return res.status(200).json(allCuadros);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

//! UPDATE
const updateCuadro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCuadro = new Cuadro(req.body);
    newCuadro._id = id;
    // findByIdAndUpdate me va a devolver el dato ANTIGUO
    const up = await Cuadro.findByIdAndUpdate(id, newCuadro, { new: true });
    return res.status(200).json(up);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

//! DELETE
const deleteCuadro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cuadroDeleted = await Cuadro.findByIdAndDelete(id);
    return res.status(200).json(cuadroDeleted);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

//! READ
const getCuadrosByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params;
    const cuadros = await Cuadro.find({ price: { $lte: precio } });
    return res.status(200).json(cuadros);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

module.exports = {
  postCuadro,
  getCuadros,
  updateCuadro,
  deleteCuadro,
  getCuadrosByPrice,
};