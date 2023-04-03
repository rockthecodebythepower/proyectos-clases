const { setError } = require("../config/error");
const Funko = require("../models/funkos");

const getAllFunkos = async (req, res, next) => {
  try {
    //coger los funkos
    const funkos = await Funko.find();

    //respuesta con los funkos
    return res.status(200).json(funkos);
  } catch (error) {
    return next(setError(400, "Error cogiendo los funkos"));
  }
};

const getFunkoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const funko = await Funko.findById(id);
    return res.status(200).json(funko);
  } catch (error) {
    return next(setError(400, error));
  }
};

const getFunkoByName = async (req, res, next) => {
  try {
    const { nombre } = req.params;

    const funko = await Funko.findOne({ nombre });

    return res.status(200).json(funko);
  } catch (error) {
    return next(setError(400, error));
  }
};

const postFunko = async (req, res, next) => {
  try {
    const newFunko = new Funko(req.body);

    await newFunko.save();

    return res.status(201).json(newFunko);
  } catch (error) {
    return next(setError(400, error));
  }
};

const putFunko = async (req, res, next) => {
  try {

    const { id } = req.params;
    const putFunko = new Funko(req.body);
    putFunko._id = id;

    const funkoUpdated = await Funko.findByIdAndUpdate(id, putFunko, {
      new: true,
    });

    return res.status(200).json(funkoUpdated);
  } catch (error) {
    return next(setError(400, error));
  }
};

const deleteFunko = async (req, res, next) => {
  try {

    const { id } = req.params;

    const funkoEliminado = await Funko.findByIdAndDelete(id);

    if (!funkoEliminado) {
        return res.status(400).json("Funko no encontrado")
    }

    return res.status(200).json(funkoEliminado);

  } catch (error) {
    return next(setError(400, error));
  }
};

module.exports = {
  getAllFunkos,
  getFunkoById,
  getFunkoByName,
  postFunko,
  putFunko,
  deleteFunko,
};
