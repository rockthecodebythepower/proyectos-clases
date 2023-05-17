const jwt = require("jsonwebtoken");
require("dotenv").config();

//Generador de tokens
const generateToken = (id, email) => {
	if (!id || !email) {
		throw new Error("Id or email are missing");
	}

	return jwt.sign({id, email}, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
};

//Verificar los tokens
const verifyToken = (token) => {
	if (!token) {
		throw new Error("Token is missing");
	}

	return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {generateToken, verifyToken};
