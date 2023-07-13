const jwt = require("jsonwebtoken");

// crear una llave
const generateSign = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "1y" });
}

// comprobar si la llave la he creado yo
const verifyJwt = (llave) => {
    return jwt.verify(llave, process.env.JWT_SECRET);
}

module.exports = { generateSign, verifyJwt }