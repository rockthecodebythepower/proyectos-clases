const Movie = require("../models/movie.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");

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
    console.log(req.body);
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

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    deleteImgCloudinary(deletedMovie.poster);
    return res.status(200).json("Movie deleted");
  } catch (error) {
    return next("Error deleting movie", error);
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  deleteMovie,
};
