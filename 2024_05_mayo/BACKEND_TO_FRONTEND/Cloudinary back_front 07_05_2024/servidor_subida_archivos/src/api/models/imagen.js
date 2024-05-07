const mongoose = require("mongoose");

const imagenSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true, default: "imagen por defecto" }
  },
  {
    timestamps: true,
    collection: "imagenes"
  }
);

const Imagen = mongoose.model("imagenes", imagenSchema, "imagenes");
module.exports = Imagen;