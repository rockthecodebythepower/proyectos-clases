const mongoose = require("mongoose");

const TranformerSchema = new mongoose.Schema(
	{
		name: {type: String, required: true, trim: true},
		vehicle: {type: String, required: true, trim: true},
		label: {type: String, required: true, trim: true},
	},
	{
		timestamps: true,
	}
);

const Transformer = mongoose.model("transformer", TranformerSchema);

module.exports = Transformer;
