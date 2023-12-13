const User = require("../api/models/user");
const { verificarLlave } = require("../utils/jwt");

const isAuth = async (req, res, next) => {
    try {

        const token = req.headers.authorization;
        const parsedToken = token.replace("Bearer ", "");

        const { id } = verificarLlave(parsedToken);
        const user = await User.findById(id);

        // abrir la puerta
        user.password = null;
        req.user = user;
        next();
        
    } catch (error) {
        return res.status(400).json("No estás autorizado")
    }
}

module.exports = { isAuth }