const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);

    const userExists = await User.findOne({ email: newUser.email });

    if (userExists) {
      return next("User already exists");
    }
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    return next("Error creating user", error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next("User not found");
    }
    //Si Bcryt, al desencriptar la contraseña del body de la petición coincide con la del usuario...
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateToken(user._id, user.email);

      return res.status(200).json({
        user: {
          email: user.email,
          _id: user._id,
        },
        token: token,
      });
    }
  } catch (error) {
    return next("User cannot login", error);
  }
};

module.exports = {
  register,
  login,
};
