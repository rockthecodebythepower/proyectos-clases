const mongoose = require("mongoose");

const marvelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  power: { type: Number, required: true },
  age: { type: Number, required: true },
  group: { type: String },
});

const Marvel = mongoose.model("marvels", marvelSchema, "marvels");
module.exports = Marvel;