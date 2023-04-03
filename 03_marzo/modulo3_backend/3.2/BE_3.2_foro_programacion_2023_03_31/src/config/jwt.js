const jwt = require("jsonwebtoken");

const generateSign = (id) => {
  return jwt.sign({ id }, process.env.SECRET_WORD, { expiresIn: "30d" });
};

const verifyJwt = (token) => {
  return jwt.verify(token, process.env.SECRET_WORD);
};

module.exports = { generateSign, verifyJwt };
