const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    cover: {
      type: String,
      required: false,
      default: "https://iili.io/HlHy9Yx.png",
    },
  },
  {
    timestamps: true,
  }
);

const Album = mongoose.model("album", AlbumSchema);

module.exports = Album;
