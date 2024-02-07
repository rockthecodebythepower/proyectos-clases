const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: "String", required: true },
    portrait: { type: "String", required: true, trim: true },
  },
  {
    timestamps: true,
    collection: "movies"
  }
);

const Movie = mongoose.model("movies", movieSchema, "movies");
module.exports = Movie;