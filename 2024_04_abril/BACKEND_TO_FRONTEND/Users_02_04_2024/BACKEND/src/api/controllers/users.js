const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    newUser.rol = "user";

    const duplicatedUser = await User.findOne({ userName: req.body.userName });

    if (duplicatedUser) return res.status(400).json("Usuario existente");

    const user = await newUser.save();

    return res.status(201).json({
      message: "Usuario creado con éxito",
      user,
    });
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) return res.status(400).json("Usuario no encontrado");

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      return res.status(200).json({
        message: "Logueado correctamente",
        token,
        user,
      });
    } else {
      return res.status(400).json("Contraseña incorrecta");
    }
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const modifyUser = async (req, res, next) => {
  try {
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const getUser = async (req, res, next) => {
  try {
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    return res.status(200).json({
      message: "User eliminado",
      user,
    });
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const checkSession = async (req, res, next) => {
    console.log("entró");
    return res.status(200).json(req.user);
}

module.exports = {
  register,
  login,
  modifyUser,
  getUsers,
  getUser,
  deleteUser,
  checkSession
};
