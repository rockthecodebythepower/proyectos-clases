const mongoose = require("mongoose");

const PictureSchema = new mongoose.Schema({
	title: {type: String, required: true, trim: true},
	author: {type: String, required: true, trim: true},
	image: {type: String, required: true},
});

const Picture = mongoose.model("Picture", PictureSchema);

module.exports = Picture;
