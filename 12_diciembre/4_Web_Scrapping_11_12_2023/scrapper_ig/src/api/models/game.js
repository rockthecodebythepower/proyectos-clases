const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: false },
    stock: { type: Boolean, required: true, default: true }
  },
  {
    timestamps: true,
    collection: "games",
  }
);

const Game = mongoose.model("games", gameSchema, "games");
module.exports = Game;