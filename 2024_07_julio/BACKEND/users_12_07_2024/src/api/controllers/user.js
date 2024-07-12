const { generateToken } = require("../../utils/jwt/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt")

const register = async (req, res, next) => {
  try {

    const { email } = req.body;

    const newUser = new User(req.body);

    const userDuplicated = await User.findOne({ email });

    if (userDuplicated) {
        return res.status(400).json("usuario duplicado");
    }

    const user = await newUser.save();

    return res.status(201).json(user);

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
}

const login = async (req, res, next) => {
    try {
        
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json("Usuario o contraseña incorrectos");
        }

        if (bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user._id);
            return res.status(200).json({ token, user });
        } else {
            return res.status(400).json("Usuario o contraseña incorrectos");
        }

    } catch (error) {
        return res.status(400).json("error")
    }
}

module.exports = { register, getUsers, login }