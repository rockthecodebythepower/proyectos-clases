const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, required: true },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("image", imageSchema);
module.exports = Image;
