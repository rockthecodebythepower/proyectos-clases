const { setError } = require("../config/error");
const { verifyJwt } = require("../config/jwt");
const User = require("../models/user");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(setError(401, "Unauthorized"));
    }

    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyJwt(parsedToken);
    const userLogued = await User.findById(validToken.id);

    userLogued.password = null;
    req.user = userLogued;
    next();
  } catch (error) {
    return next(setError());
  }
};

module.exports = { isAuth };
