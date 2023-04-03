const mongoose = require("mongoose");

const funkosSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    imagen: { type: String, required: true },
    pelicula: { type: String, required: true },
    peso: { type: Number, required: true },
    altura: { type: Number, required: true },
    poder: { type: Number, required: true },
    vida: { type: Number, required: true }
}, {
    timestamps: true,
    collection: "funkos"
});

const Funko = mongoose.model("funkos", funkosSchema);
module.exports = Funko;