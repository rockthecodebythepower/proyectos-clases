const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    /* img2: { type: String, required: true }, */
    textoSuperior: { type: String, required: false },
    textoInferior: { type: String, required: false },
  },
  {
    timestamps: true,
    collection: "memes",
  }
);

const Meme = mongoose.model("memes", memeSchema, "memes");
module.exports = Meme;