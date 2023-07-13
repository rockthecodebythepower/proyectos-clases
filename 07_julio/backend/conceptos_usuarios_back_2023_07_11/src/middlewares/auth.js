//! Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWQzOWUzMWVjMTZiMWY2YmYzNmRkYSIsImlhdCI6MTY4OTA3NDU1NSwiZXhwIjoxNzIwNjMyMTU1fQ.ktkDuAhqEz5cO30JiHwprnNxpn0d8OP4MjuwetwK73M 

const User = require("../api/models/users");
const { verifyJwt } = require("../config/jwt");

// PUERTA
const isAuth = (roles) => {
    return async (req, res, next) => {
        try {

            const llave = req.headers.authorization;

            console.log(llave);
    
            if (!llave) {
                return res.status(400).json("No puedes abrir la puerta sin llave")
            }
    
            const parsedLlave = llave.replace("Bearer ", "");
            const validLlave = verifyJwt(parsedLlave);
            const userLogued = await User.findById(validLlave.id);
    
            userLogued.password = null;
            req.user = userLogued;

            if (roles && roles.includes(userLogued.rol)) {
                // abrir la puerta
                next();
            } else if (!roles) {
                // abrir la puerta
                next();
            } else {
                return res.status(400).json("No puedes pasar porque tienes el rol incorrecto")
            }
            
        } catch (error) {
            return res.status(400).json("la llave no la he hecho yo")
        }
    }
}

module.exports = { isAuth }