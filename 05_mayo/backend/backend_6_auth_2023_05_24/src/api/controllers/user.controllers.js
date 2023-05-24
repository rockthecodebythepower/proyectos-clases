const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const setError = require("../../utils/error");
const {generateToken} = require("../../utils/token");

const getAllUsers = async (req, res, next) => {
	try {
		const allUsers = await User.find();
		return res.status(200).json(allUsers);
	} catch (error) {
		return next(setError(500, error.message || "Error getting all users"));
	}
};

const register = async (req, res, next) => {
	try {
		const newUser = new User(req.body);
		//Comprobamos que este usuario no existe
		const userExists = await User.findOne({username: newUser.username});
		if (userExists) {
			return next(setError(409, "User already exists"));
		}
		await newUser.save();
		return res.status(201).json("User created");
	} catch (error) {
		return next(setError(500, error.message || "Error creating User"));
	}
};

const login = async (req, res, next) => {
	try {
		//Comprobamos si el usuario existe en la base de datos
		const userInDB = await User.findOne({username: req.body.username});
		if (!userInDB) {
			return next(setError(404, "User not found"));
		}
		//Vamos a comprobar que la contraseña coincide con la contraseña encriptada
		if (bcrypt.compareSync(req.body.password, userInDB.password)) {
			//Creamos el token
			const token = generateToken(userInDB._id, userInDB.username);
			return res.status(200).json({userInDB, token});
		} else {
			return next(setError(401, "Invalid password"));
		}
	} catch (error) {
		return next(setError(500, error.message || "Failed Authentication"));
	}
};

module.exports = {getAllUsers, register, login};
