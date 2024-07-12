const User = require("../api/models/user");
const { verifyToken } = require("../utils/jwt/jwt");

const isAuth = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization;
        const parsedToken = token.replace("Bearer ", "");

        const { id } = verifyToken(parsedToken);

        const user = await User.findById(id);

        user.password = null;
        req.user = user;
        next() // te dejo pasar a la siguiente función

    } catch (error) {
        return res.status(400).json("Unauthoraized");
    }
}

module.exports = { isAuth }