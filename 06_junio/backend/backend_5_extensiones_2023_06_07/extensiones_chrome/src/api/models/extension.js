const mongoose = require("mongoose");

const extensionSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    utilidad: { type: String, required: true },
    enlace: { type: String, required: true },
    puntuacion: { type: Number, required: true, default: 2.5, max: 5, min: 0 },
    probada: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    collection: "extensiones"
  }
);

const Extension = mongoose.model("extensiones", extensionSchema);
module.exports = Extension;