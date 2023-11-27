const mongoose = require("mongoose");

const cuadroSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: "cuadros", // informativo
  }
);

//                              info         schema   nombre colección
const Cuadro = mongoose.model("cuadros", cuadroSchema, "cuadros");
module.exports = Cuadro;