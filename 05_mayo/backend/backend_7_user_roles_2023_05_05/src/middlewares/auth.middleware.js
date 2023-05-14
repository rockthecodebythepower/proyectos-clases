const User = require("../api/models/user.model");
const { verifyToken } = require("../utils/token");
const dotenv = require("dotenv");
dotenv.config();

const isUser = async (req, res, next) => {
  //Troceamos el token porque viene de la siguiente forma:
  //"Bearer 1psdn32o43nt23go2n"
  //Utilizamos ? el optional chaining para que no rompa con un undefined
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    /* return next(new Error("Unauthorized")); */
    return res.status(401).json("Unauthorized");
  }
  //Si el token ha sido troceado correctamente...
  try {
    //Decodificamos el token
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    //De esta manera podemos recuperar el usuario que tiene el token y verificar que es valido
    req.user = await User.findById(decoded.id);
    //Encontramos al usuario por id y lo dejamos pasar con la siguiente ejecución con next
    next();
  } catch (error) {
    return next(error);
  }
};

const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (req.user.rol === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json(
          "A donde vas, eres user, si quieres entrar aquí pide a un administrador que te cambie el rol"
        );
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { isUser, isAdmin };
