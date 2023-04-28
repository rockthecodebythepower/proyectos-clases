const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  genre: { type: String, required: false, trim: true },
  poster: { type: String, required: true },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
