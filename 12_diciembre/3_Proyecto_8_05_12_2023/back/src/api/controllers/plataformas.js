const { deleteFile } = require("../../utils/deleteFile");
const Plataforma = require("../models/plataformas");

const getPlataformas = async (req, res, next) => {
  try {
    const plataformas = await Plataforma.find().populate("juegos");
    return res.status(200).json(plataformas);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

const getPlataformaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataforma = await Plataforma.findById(id).populate("juegos");
    return res.status(200).json(plataforma);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataforma(req.body);
    if (req.file) {
      newPlataforma.imagen = req.file.path;
    }
    const plataformaSaved = await newPlataforma.save();
    return res.status(201).json(plataformaSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const putPlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPlataforma = await Plataforma.findById(id);
    const newPlataforma = new Plataforma(req.body);
    newPlataforma._id = id;
    const juegos = req.body.juegos || [];
    newPlataforma.juegos = [...oldPlataforma.juegos, ...juegos];

    if (req.file) {
      newPlataforma.imagen = req.file.path;
      deleteFile(oldPlataforma.imagen);
    }

    const plataformaUpdated = await Plataforma.findByIdAndUpdate(id, newPlataforma, {
      new: true,
    });
    return res.status(200).json(plataformaUpdated);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const deletePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataformaDeleted = await Plataforma.findByIdAndDelete(id);
    deleteFile(plataformaDeleted.imagen);
    return res.status(200).json(plataformaDeleted);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

module.exports = {
  getPlataformas,
  getPlataformaById,
  postPlataforma,
  putPlataforma,
  deletePlataforma,
};