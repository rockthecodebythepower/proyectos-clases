const { generateToken } = require("../../config/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();

    console.log(allUsers.sort((a, b) => b.puntuacion - a.puntuacion));

    return res.status(200).json(allUsers);

  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: "Fallo al hacer el get de los users", error });
  }
};

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);

    const userDB = await newUser.save();

    return res.status(201).json(userDB);
  } catch (error) {
    return res.status(400).json({ mensaje: "Fallo al crear usuario", error });
  }
};

const login = async (req, res, next) => {
  try {
    console.log(req.body);
    const userDB = await User.findOne({ userName: req.body.userName });

    if (!userDB) {
      return res.status(400).json("ese usuario no existe");
    }

    if (bcrypt.compareSync(req.body.password, userDB.password)) {
      const token = generateToken(userDB._id);
      return res.status(200).json({ token, userDB });
    } else {
      return res.status(400).json("contraseña incorrecta");
    }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ mensaje: "Fallo al hacer login de usuario", error });
  }
};

const checksession = async (req, res, next) => {
  return res.status(200).json(req.user);
};

const changePuntuacion = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userDB = await User.findById(id);

    userDB.puntuacion++;

    console.log(userDB);

    const userUpdated = await User.findByIdAndUpdate(id, userDB, { new: true });

    return res.status(200).json(userUpdated);
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: "Fallo al modificar el usuario", error });
  }
};

module.exports = {
  getAllUsers,
  register,
  login,
  checksession,
  changePuntuacion,
};
