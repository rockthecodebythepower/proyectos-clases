const Libro = require("../models/libro");

const getLibros = async (req, res, next) => {
  try {
    const libros = await Libro.find();
    return res.status(200).json(libros);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getLibroById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findById(id);
    return res.status(200).json(libro);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const postLibro = async (req, res, next) => {
  try {
    const newLibro = new Libro(req.body);
    const libro = await newLibro.save();
    return res.status(201).json(libro);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const updateLibro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newLibro = new Libro(req.body);
    newLibro._id = id;
    const libroUpdated = await Libro.findByIdAndUpdate(id, newLibro, {
      new: true,
    });
    return res.status(200).json(libroUpdated);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const deleteLibro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findByIdAndDelete(id);
    return res.status(200).json({
      mensaje: "Ha sido eliminado con éxito",
      libroEliminado: libro,
    });
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = {
  getLibros,
  getLibroById,
  postLibro,
  updateLibro,
  deleteLibro,
};
