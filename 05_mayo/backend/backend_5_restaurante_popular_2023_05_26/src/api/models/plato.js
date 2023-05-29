const mongoose = require("mongoose");

const PlatoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    precio: { type: Number, required: true },
    tipoPlato: {
      type: String,
      enum: ["primero", "segundo", "postre", "entrante", "bebida"],
      required: true,
    },
    imagen: { type: String, required: false },
  },
  { collection: "platos" }
);

const Plato = mongoose.model("platos", PlatoSchema);
module.exports = Plato;