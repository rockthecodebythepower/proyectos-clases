const mongoose = require("mongoose");

const entradaSchema = new mongoose.Schema(
  {
    url: { type: "String", required: true, trim: true, unique: true },
  },
  {
    timestamps: true,
    collection: "entradas"
  }
);

const Entrada = mongoose.model("entradas", entradaSchema);

module.exports = Entrada;
