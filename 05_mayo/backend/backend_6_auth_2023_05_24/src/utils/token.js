const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (id, username) => {
	return jwt.sign({id, username}, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
};

const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {generateToken, verifyToken};
