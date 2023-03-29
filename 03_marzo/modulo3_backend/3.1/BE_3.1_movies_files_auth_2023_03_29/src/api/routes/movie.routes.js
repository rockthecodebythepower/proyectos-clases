const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const isAuth = require("../../middlewares/auth.middleware");
const {
  getAllMovies,
  createMovie,
  deleteMovie,
} = require("../controllers/movie.controllers");

const MoviesRouter = express.Router();

MoviesRouter.get("/", getAllMovies);
MoviesRouter.post("/", [isAuth], upload.single("poster"), createMovie);
MoviesRouter.delete("/:id", [isAuth], deleteMovie);

module.exports = MoviesRouter;
