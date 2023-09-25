const { deleteFile } = require("../../utils/Cloudinary/deleteFile");
const { getToken } = require("../../utils/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    if (req.file) {
        newUser.image = req.file.path;
    }
    const userDuplicate = await User.findOne({ userName: req.body.userName });
    if (userDuplicate) {
      return res.status(400).json("Este nombre de usuario ya existe");
    }
    const userDB = await newUser.save();
    userDB.password = null;
    return res.status(201).json(userDB);
  } catch (error) {
    deleteFile(req.file.path);
    return res.status(400).json("error");
  }
};

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json("El usuario o la contraseña son incorrectos");
    }

    if (bcrypt.compareSync(password, user.password)) {
        const token = getToken(user._id);
        user.password = null;
        return res.status(200).json({ user, token });
    }

    return res.status(400).json("El usuario o la contraseña son incorrectos");

  } catch (error) {
    return res.status(400).json("error");
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ score: "desc" }).select({ password: false });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newUser = User(req.body);
    newUser._id = id;

    if (req.file) {
        deleteFile(newUser.image);
        newUser.image = req.file.path;
    }

    const updated = await User.findByIdAndUpdate(id, newUser, { new: true });
    updated.password = null;
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  updateUser,
};
