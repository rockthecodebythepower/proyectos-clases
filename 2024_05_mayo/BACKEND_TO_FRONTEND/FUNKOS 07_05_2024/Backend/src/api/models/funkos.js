const mongoose = require("mongoose");

const funkoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: "funkos",
  }
);

const Funko = mongoose.model("funkos", funkoSchema, "funkos");
module.exports = Funko;