const mongoose = require("mongoose");

const paletteSchema = new mongoose.Schema(
  {
    result: [[{type: Number, required: true, max: 255, min: 0}]]
  },
  {
    timestamps: true,
    collection: "palettes",
  }
);

const Palette = mongoose.model("palettes", paletteSchema);

module.exports = Palette;