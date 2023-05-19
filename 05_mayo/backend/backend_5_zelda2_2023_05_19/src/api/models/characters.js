//! requiere mongoose para crear el schema y el modelo
const mongoose = require("mongoose");

//? creamos el schema con todas las propiedades que queremos que tenga y sus cualidades y al final un objeto con las opciones
const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    evil: { type: Boolean, required: true, default: false },
    damage: { type: Number, min: 0, max: 100, required: true },
    life: { type: Number, min: 0, max: 100, required: true},
    stars: { type: Number, min: 0, max: 10, required: true}
  },
  {
    timestamps: true,
    collection: "characters"
  }
);

//! creación del modelo, necesita una colección y un esquema
const Character = mongoose.model("characters", characterSchema);

//* exportamos
module.exports = Character;