const mongoose = require("mongoose");

const ShowSchema = new mongoose.Schema(
	{
		title: {type: String, required: true, trim: true},
		channel: {type: String, required: false, trim: true},
		cast: [{type: mongoose.Types.ObjectId, ref: "Actor"}],
	},
	{
		timestamps: true,
	}
);

const Show = mongoose.model("Show", ShowSchema);
module.exports = Show;
