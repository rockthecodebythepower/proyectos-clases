const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    civilStatus: { type: String, required: true, enum: ["single", "married"] },
    description: { type: String, required: true },
  },
  {
    collection: "characters",
  }
);

const Character = mongoose.model("characters", characterSchema, "characters");
module.exports = Character;