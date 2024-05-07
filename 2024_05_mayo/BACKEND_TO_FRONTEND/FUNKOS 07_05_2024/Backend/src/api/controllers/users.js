const { generateSign } = require("../../utils/jwt");
const User = require("../models/users");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    const userDuplicated = await User.findOne({ userName });

    if (userDuplicated) {
      return res.status(400).json("Usuario ya existente");
    }

    const user = new User({ userName, password });

    const response = await user.save();

    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    console.log(req.body);

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json("Usuario no existente");
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = generateSign(user._id);
      return res.status(200).json({ token, user });
    } else {
      return res.status(400).json("Contraseña incorrecta");
    }
  } catch (error) {
    return res.status(400).json("Error");
  }
};

const addFunko = async (req, res, next) => {
  try {
    const { idFunko, idUser } = req.params;

    const oldUser = await User.findById(idUser);

    const repeated = oldUser.listOfFunkos.find(
      (id) => id.toString() === idFunko
    );

    if (repeated) {
      return res.status(400).json("Ya tienes este funko");
    }

    const user = await User.findByIdAndUpdate(
      idUser,
      {
        $push: { listOfFunkos: idFunko },
      },
      { new: true }
    ).populate("listOfFunkos");

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

module.exports = { register, login, addFunko };
