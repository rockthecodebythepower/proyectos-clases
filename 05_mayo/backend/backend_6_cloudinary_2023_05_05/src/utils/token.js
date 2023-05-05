const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//Generar tokens
const generateToken = (id, username) => {
	if (!id || !username) {
		throw new Error("Id or username are missing!");
	}

	return jwt.sign({id, username}, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
};

//Verificar el token
const verifyToken = (token) => {
	if (!token) {
		throw new Error("Token is missing!");
	}

	return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {generateToken, verifyToken};
