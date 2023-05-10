const { generateSign } = require("../../utils/jwt/jwt");
const User = require("../models/users");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json("Users not found 😑");
  }
};

const register = async (req, res, next) => {
  try {

    console.log(req.body);

    const newUser = new User(req.body);

    newUser.rol = "user";

    await newUser.save();

    return res.status(201).json(newUser);

  } catch (error) {
    return res.status(400).json("No se ha podido crear el usuario 😶");
  }
};

const login = async (req, res, next) => {
    try {
        
        const userDB = await User.findOne({ userName: req.body.userName });

        if (!userDB)  {
            return res.status(400).json("Nombre de usuario incorrecto 🥵");
        }

        if (bcrypt.compareSync(req.body.password, userDB.password)) {
            const token = generateSign(userDB._id);
            return res.status(200).json({token, userDB});
        } else {
            return res.status(400).json("Contraseña incorrecta 😣");
        }

    } catch (error) {
        return res.status(400).json("No se ha podido llevar a cabo el login 🙄")
    }
}

module.exports = {
  getAllUsers,
  register,
  login
};
