const mongoose = require("mongoose");

const WeaponSchema = new mongoose.Schema(
	{
		name: {type: String, required: true, trim: true},
		level: {type: String, required: true, trim: true},
		dex: {type: String, required: true, trim: true},
		int: {type: String, required: false, trim: true},
		damage: {type: String, required: true, trim: true},
		critical: {type: String, required: true, trim: true},
		aps: {type: String, required: true, trim: true},
		dps: {type: String, required: true, trim: true},
		image: {type: String, required: false, trim: true},
	},
	{
		timestamps: true,
	}
);

const Weapon = mongoose.model("Weapon", WeaponSchema);

module.exports = Weapon;
