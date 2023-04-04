const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

const generateToken = (id, username) => {
  if (!id || !username) {
    throw new Error("Username or id are missing")
  }

  return jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: "1d"})
}

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token is missing")
  }
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {generateToken, verifyToken}
