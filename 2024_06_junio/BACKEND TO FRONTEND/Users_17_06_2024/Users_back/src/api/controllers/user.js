const { generateSign } = require("../../utils/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    console.log("Register");
    const newUser = new User(req.body);
    const userDuplicated = await User.findOne({ email: req.body.email }).or({
      userName: req.body.userName,
    });

    if (userDuplicated) {
      return res.status(400).json("Usuario ya existente");
    }

    if (req.file) {
      newUser.img = req.file.path;
    }

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
        const token = generateSign(user._id);
        return res.status(200).json({ user, token });
    }

    return res.status(400).json("Usuario o contraseña incorrectos");
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = {
  register,
  login,
  getUsers,
};
