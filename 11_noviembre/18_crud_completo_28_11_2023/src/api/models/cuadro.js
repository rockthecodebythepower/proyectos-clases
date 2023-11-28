const mongoose = require("mongoose");

const cuadroSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    price: { type: Number, requierd: true },
    title: { type: String, required: true },
    artist: { type: mongoose.Types.ObjectId, required: false, ref: "artists" }
  },
  {
    timestamps: true,
    collection: "cuadros"
  }
);

const Cuadro = mongoose.model("cuadros", cuadroSchema, "cuadros");
module.exports = Cuadro;