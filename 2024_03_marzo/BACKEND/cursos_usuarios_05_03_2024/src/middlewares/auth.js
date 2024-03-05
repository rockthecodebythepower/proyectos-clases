const User = require("../api/models/user");
const { verifyJwt } = require("../config/jwt");

const isAuth = async (req, res, next) => {
  try {
    // validar si mi token existe y luego si es el que yo he creado
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json("No tienes permisos");
    }

    const { id } = verifyJwt(token.replace("Bearer ", ""));

    const user = await User.findById(id);

    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json("No tienes permisos");
  }
};

module.exports = { isAuth };
