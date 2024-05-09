const jwt = require("jsonwebtoken");

const generateKey = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1y" });

const validateKey = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
    generateKey, 
    validateKey
}