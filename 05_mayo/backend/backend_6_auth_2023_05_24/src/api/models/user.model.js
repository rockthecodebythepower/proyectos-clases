const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {validationPassword} = require("../../utils/validators");

const UserSchema = new mongoose.Schema(
	{
		username: {type: String, required: true, trim: true},
		password: {type: String, required: true, trim: true},
	},
	{
		timestamps: true,
	}
);

UserSchema.pre("save", function (next) {
	//Si no pasa la validación nos salimos de la función y mostramos un mensaje al usuario
	if (!validationPassword(this.password)) {
		return next(
			"The password must contain one uppercase letter, one lowercase letter, one number, one special character and between 8 and 12 characters"
		);
	}
	//La contraseña que va a entrar en la base de datos se va a randomizar 10 veces con bcrypt
	this.password = bcrypt.hashSync(this.password, 10);
	next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
