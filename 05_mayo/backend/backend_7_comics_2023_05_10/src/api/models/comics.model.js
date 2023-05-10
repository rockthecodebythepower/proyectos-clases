const mongoose = require("mongoose");

const ComicSchema = new mongoose.Schema(
	{
		title: {type: String, required: true, trim: true},
		author: {type: String, required: true, trim: true},
		cover: {type: String, required: true},
	},
	{
		timestamps: true,
	}
);

const Comic = mongoose.model("Comic", ComicSchema);

module.exports = Comic;
