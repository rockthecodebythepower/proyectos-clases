const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
	{
		title: {type: String, required: true, trim: true},
		author: {type: String, required: false, trim: true},
		cover: {type: String, required: true},
	},
	{
		timestamps: true,
	}
);

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
