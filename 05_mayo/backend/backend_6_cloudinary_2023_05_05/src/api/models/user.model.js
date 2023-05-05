const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
	{
		username: {type: String, required: true, trim: true},
		password: {type: String, required: true, trim: true},
	},
	{
		timestamps: true,
	}
);

UserSchema.pre("save", async function (next) {
	try {
		this.password = await bcrypt.hash(this.password, 10);
		next();
	} catch (error) {
		next("Error hashing password", error);
	}
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
