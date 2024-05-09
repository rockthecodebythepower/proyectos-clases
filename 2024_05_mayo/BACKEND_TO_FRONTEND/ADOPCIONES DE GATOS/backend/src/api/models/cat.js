const mongoose = require("mongoose");

const catSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    favoriteToy: { type: String, required: true },
    favoriteFood: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    collection: "cats",
    timestamps: true,
  }
);

const Cat = mongoose.model("cats", catSchema, "cats");
module.exports = Cat;