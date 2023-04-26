const User = require("../models/user");
const { setError } = require("../config/error");
const { deleteFile } = require("../middlewares/deleteFile");
const bcrypt = require("bcrypt");
const { generateSign } = require("../config/jwt");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);

    //! cloudinary
    if (req.file) {
      newUser.photo = req.file.path;
    }

    const userDB = await newUser.save();
    return res.status(201).json(userDB);
  } catch (error) {
    return next(setError(400, error));
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return next(setError(400, error));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUser = new User(req.body);
    newUser._id = id;
    const oldUser = await User.findById(id);

    if (req.file) {
      if (oldUser.photo) {
        deleteFile(oldUser.photo);
      }
      newUser.photo = req.file.path;
    }

    const userUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true,
    });

    if (!userUpdated) {
      return next(setError(400, "User not found"));
    }

    return res.status(200).json(userUpdated);
  } catch (error) {
    return next(setError(400, error));
  }
};

const login = async (req, res, next) => {
  try {
    const userDB = await User.findOne({userName: req.body.userName});
    if (!userDB) {
        return next(setError(400, "Nombre de usuario incorrecto"));
    }

    if (bcrypt.compareSync(req.body.password, userDB.password)) {
        const token = generateSign(userDB._id);
        return res.status(200).json({token, userDB});
    } else {
        return next(setError(400, "Contraseña incorrecta"))
    }

  } catch (error) {
    next(setError());
  }
};

/* login -> privatizar rutas */

module.exports = {
  register,
  updateUser,
  getAllUsers,
  login,
};
