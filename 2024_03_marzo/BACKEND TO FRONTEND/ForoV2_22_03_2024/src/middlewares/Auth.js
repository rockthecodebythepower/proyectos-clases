const jwt = require("jsonwebtoken");
const User = require("../api/models/users");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(id);

    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json("Unauthoraized");
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user.rol === "admin") {
    next();
  } else {
    return res.status(401).json("You are not Admin");
  }
};

module.exports = { isAuth, isAdmin };
