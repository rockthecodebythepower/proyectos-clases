const { getToken } = require("../../config/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const userDuplicated = await User.findOne({ email: req.body.email });

    if (userDuplicated) {
      return res.status(400).json("Ese usuario ya existe");
    }

    newUser.rol = "user";
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const login = async (req, res) => {
  try {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).json("usuario o contraseña incorrectos");
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = getToken(user._id);
        return res.status(200).json({ token, user })
    } else {
        return res.status(400).json("usuario o contraseña incorrectos");
    }

  } catch (error) {
    return res.status(400).json("error");
  }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const newUser = new User(req.body);

        newUser.rol = "user";

        if (req.user.rol === "admin") {
            newUser.rol = req.body.rol;
        }

        const oldUser = await User.findById(id);
        newUser._id = id;
        
        newUser.courses = [...oldUser.courses, ...newUser.courses];
        
        const user = await User.findByIdAndUpdate(id, newUser, { new: true });
        return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json("error");
    }
  };

module.exports = { register, login, updateUser };
