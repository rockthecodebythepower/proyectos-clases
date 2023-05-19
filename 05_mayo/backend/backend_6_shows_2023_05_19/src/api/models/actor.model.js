const mongoose = require("mongoose");

const ActorSchema = new mongoose.Schema(
	{
		name: {type: String, required: true, trim: true},
		age: {type: Number, required: false, trim: true},
		country: {type: String, required: false, trim: true, default: "Unknown"},
	},
	{
		timestamps: true,
	}
);

const Actor = mongoose.model("Actor", ActorSchema);

module.exports = Actor;
