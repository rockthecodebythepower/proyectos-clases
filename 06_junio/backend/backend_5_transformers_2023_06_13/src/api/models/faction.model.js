const mongoose = require("mongoose");

const FactionSchema = new mongoose.Schema(
	{
		name: {type: String, required: true, trim: true},
		logo: {type: String, required: true, trim: true},
		members: [{type: mongoose.Types.ObjectId, ref: "transformer"}],
	},
	{
		timestamps: true,
	}
);

const Faction = mongoose.model("faction", FactionSchema);

module.exports = Faction;
