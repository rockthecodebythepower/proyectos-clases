const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    evil: { type: Boolean, required: true, default: false },
    damage: { type: Number, required: false }
  },
  {
    timestamps: true,
    collection: "characters"
  }
);

const Character = mongoose.model("characters", characterSchema);
module.exports = Character;