const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: "artists"
  }
);

const Artist = mongoose.model("artists", artistSchema, "artists");
module.exports = Artist;