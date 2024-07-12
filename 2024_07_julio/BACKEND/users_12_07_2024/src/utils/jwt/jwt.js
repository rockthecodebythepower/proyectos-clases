const jwt = require("jsonwebtoken");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "30d" });

const verifyToken = (token) => jwt.verify(token, process.env.SECRET_KEY);

module.exports = { generateToken, verifyToken };
