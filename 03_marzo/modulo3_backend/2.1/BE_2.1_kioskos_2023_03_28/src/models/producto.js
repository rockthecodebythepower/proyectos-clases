const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema(
  {
    nombre: {type: String, trim: true, required: true},
    precio: {type: Number, required: true},
    imagen: {type: String, trim: true, required: true}
  },
  { timestamps: true, collection: "productos" }
);

const Producto = mongoose.model("productos", productoSchema);
module.exports = Producto;
