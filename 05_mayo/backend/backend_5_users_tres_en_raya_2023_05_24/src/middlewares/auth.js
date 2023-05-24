const User = require("../api/models/user");
const { verifyJwt } = require("../config/jwt");


const isAuth = async (req, res, next) => {
    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json("A donde vas barrabás");
        }

        const parsedToken = token.replace("Bearer ", "");
        const validToken = verifyJwt(parsedToken);
        const userLogued = await User.findById(validToken.id);

        userLogued.password = null;
        req.user = userLogued;
        next();
        
    } catch (error) {
        return res.status(400).json("algo ha salido mal")
    }
}

module.exports = { isAuth }