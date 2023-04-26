const mongoose = require("mongoose");

const VideogameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    year: {
      type: Number,
      default: 2023,
      required: false,
      trim: true,
      validate: {
        validator: (v) => v >= 1958 && v <= 2030,
        message: "Year between 1958 & 2030",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Videogame = mongoose.model("Videogame", VideogameSchema);

module.exports = Videogame;
