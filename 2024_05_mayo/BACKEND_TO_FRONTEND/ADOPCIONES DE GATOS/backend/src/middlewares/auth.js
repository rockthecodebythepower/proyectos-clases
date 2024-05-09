const User = require("../api/models/user");
const { validateKey } = require("../utils/jwt");

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");

        const { id } = validateKey(token);

        const user = await User.findById(id);

        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json("error")
    }
} 

module.exports = { isAuth }