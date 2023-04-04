const mongoose = require("mongoose")

const PhotoSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, trim: true},
    url: {type: String, required: true, trim: true},
    location: {type: String, required: true, trim: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  },
  {
    timestamps: true,
  }
)

const Photo = mongoose.model("Photo", PhotoSchema)
module.exports = Photo
