const mongoose = require("mongoose");

const comidaSchema = new mongoose.Schema({
    expiringDate: { type: Date, required: true },
    img: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true }
    /* coords: {
        x: { type: Number, required: true },
        y: { type: Number, required: true }
    } */
});

const Comida = mongoose.model("comidas", comidaSchema, "comidas");
module.exports = Comida;