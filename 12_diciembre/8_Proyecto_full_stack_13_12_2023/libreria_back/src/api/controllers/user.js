const { generarLlave } = require("../../utils/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate("favoritos");
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("favoritos");
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const register = async (req, res, next) => {
  try {
    const userDuplicated = await User.findOne({ userName: req.body.userName });

    if (userDuplicated) {
      return res.status(400).json("Usuario ya existente");
    }

    const newUser = new User({
        userName: req.body.userName,
        password: req.body.password,
        rol: "user"
    });
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });

    if (!user) {
        return res.status(400).json("Usuario o contraseña incorrectos");
    }

    if (bcrypt.compareSync(password, user.password)) {
        const token = generarLlave(user._id);
        return res.status(200).json({ token, user })
    }

    return res.status(400).json("Usuario o contraseña incorrectos");

  } catch (error) {
    return res.status(400).json("error");
  }
};

const updateUser = async (req, res, next) => {
  try {

    const { id } = req.params;

    if (req.user._id.toString() !== id) {
        return res.status(400).json("No puedes modificar a alguien que no seas tu mismo")
    }

    const oldUser = await User.findById(id);
    const newUser = new User(req.body);
    newUser._id = id;
    newUser.favoritos = [...oldUser.favoritos, ...newUser.favoritos];
    const userUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true,
    });

    return res.status(200).json(userUpdated);

  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = {
  getUsers,
  getUserById,
  register,
  updateUser,
  login,
};
