const mongoose = require("mongoose");

const shelvingSchema = new mongoose.Schema(
    {
        cleanImage: { type: String },
        exampleImage: { type: String },
        name: { type: String },
        offer: { type: Boolean },
        price: { type: String },
        stars: { type: Number },
        opinions: { type: Number },
    }
);

const Shelving = mongoose.model("shelvings", shelvingSchema, "shelvings");
module.exports = Shelving;