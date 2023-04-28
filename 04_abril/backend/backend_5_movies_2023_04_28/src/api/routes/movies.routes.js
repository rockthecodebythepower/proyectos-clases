const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");

const MoviesRouter = express.Router();

MoviesRouter.get("/", getAllMovies);
MoviesRouter.post("/", upload.single("poster"), createMovie);
MoviesRouter.patch("/:id", upload.single("poster"), updateMovie);
MoviesRouter.delete("/:id", deleteMovie);

module.exports = MoviesRouter;
