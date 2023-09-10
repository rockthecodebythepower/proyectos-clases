const { generateSign } = require("../../config/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {

    try {

        const userDuplicate = await User.findOne({ email: req.body.email });

        if (userDuplicate) {
            return res.status(400).json("este usuario ya existe");
        }

        const newUser = new User(req.body);

        newUser.rol = "user";
        const user = await newUser.save();

        return res.status(201).json(user);

    } catch (error) {
        console.log(error);
        return res.status(400).json("error")
    }

}

const login = async (req, res, next) => {

    try {
        const { email, password } = req.body;

        const userToLog = await User.findOne({ email: email });

        if (userToLog) {
            if (bcrypt.compareSync(password, userToLog.password)) {
                const token = generateSign(userToLog._id);
                return res.status(200).json({ user: userToLog, token })
            } else {
                return res.status(400).json("contraseña incorrecta")
            }
        } else {
            return res.status(400).json("usuario incorrecto")
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json("error")
    }

}

module.exports = { register, login }