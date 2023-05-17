const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const {generateToken} = require("../../utils/token");

const getAllUsers = async (req, res, next) => {
	try {
		const allUsers = await User.find();
		return res.status(200).json(allUsers);
	} catch (error) {
		return next("Error finding users", error);
	}
};

const register = async (req, res, next) => {
	try {
		const newUser = new User(req.body);
		const existingUser = await User.findOne({email: newUser.email});
		if (existingUser) {
			return next("User already exists");
		}

		const createdUser = await newUser.save();
		//Ocultamos la contraseña
		createdUser.password = null;
		return res.status(201).json(createdUser);
	} catch (error) {
		return next("Error registering user", error);
	}
};

const login = async (req, res, next) => {
	try {
		//Vamos a comprobar que el usuario existe mediante su email
		const user = await User.findOne({email: req.body.email});
		if (!user) {
			return next("User not found");
		}
		//Vamos a comprobar mediante bcrypt que la contraseña del body coincide con la contraseña del usuario DESENCRIPTANDOLA
		if (bcrypt.compareSync(req.body.password, user.password)) {
			const token = generateToken(user._id, user.email);
			return res.status(200).json({
				user: {
					email: user.email,
					_id: user._id,
				},
				token: token,
			});
		} else {
			return next("Incorrect password");
		}
	} catch (error) {
		return next("Login failed", error);
	}
};

module.exports = {getAllUsers, login, register};
