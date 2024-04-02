const jwt = require("jsonwebtoken");
const User = require("../api/models/users");

const isAuth = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization.replace("Bearer ", "");

        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(id);

        user.password = null;
        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json("Unauthorized");
    }
}

module.exports = { isAuth }