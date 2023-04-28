const Movie = require("../models/movies.model");
const { deleteImg } = require("../../middlewares/files.middleware");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next("Movies not found", error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body);
    if (req.file) {
      newMovie.poster = req.file.path;
    }
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next("Error creating movie", error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newMovie = new Movie(req.body);
    //Vamos a mantener el id original
    newMovie._id = id;

    //Borramos la imagen original
    const originalMovie = await Movie.findById(id);
    //Si le pasamos un nuevo archivo a la petición borramos la imagen original y le metemos a la nueva pelicula el nuevo poster
    if (req.file) {
      deleteImg(originalMovie.poster);
      newMovie.poster = req.file.path;
    }
    await Movie.findByIdAndUpdate(id, newMovie);
    return res.status(200).json(newMovie);
  } catch (error) {
    return next("Error updating movie", error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    deleteImg(deletedMovie.poster);
    return res.status(200).json("Movie deleted!");
  } catch (error) {
    return next("Error deleting movie", error);
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
