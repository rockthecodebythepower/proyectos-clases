const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const {generateToken} = require("../../utils/token");

const getUsers = async (req, res, next) => {
	try {
		const allUsers = await User.find();
		return res.status(200).json(allUsers);
	} catch (error) {
		return next("Cannot get users", error);
	}
};

const register = async (req, res, next) => {
	try {
		//Creamos un nuevo usuario
		const newUser = new User(req.body);
		//Vamos a comprobar si el usuario ya existe
		const userExists = await User.findOne({username: newUser.username});
		//Si el usuario ya existe, nos salimos de la función con un mensaje
		if (userExists) {
			return next("User already exists!");
		}
		//Si el usuario es completamente nuevo...
		const createdUser = await newUser.save();
		return res.status(201).json(createdUser);
	} catch (error) {
		return next("Error creating user", error);
	}
};

const login = async (req, res, next) => {
	try {
		//Vamos a intentar encontrar al usuario por su username
		const user = await User.findOne({username: req.body.username});
		//Si el usuario no existe
		if (!user) {
			return next("User not found!");
		}
		//Si el usuario existe...
		//Vamos a comparar con bcrypt la contraseña del body con la contraseña del usuario, y la vamos a desencriptar para saber si es la misma o no
		if (bcrypt.compareSync(req.body.password, user.password)) {
			//Si la contraseña coincide, creamos el token
			const token = generateToken(user._id, user.username);

			//Devolvemos la siguiente estructura en json
			return res.status(200).json({
				user: {
					username: user.username,
					_id: user._id,
				},
				token: token,
			});
		}
	} catch (error) {
		return next("User cannont login", error);
	}
};

module.exports = {getUsers, register, login};
