const { generateSign } = require("../../config/jwt");
const User = require("../models/users");
const bcrypt = require("bcrypt")

const register = async (req, res, next) => {
    try {
        
        const newUser = new User(req.body);

        newUser.rol = "user";

        const userDuplicate = await User.findOne({ email: newUser.email });

        if (userDuplicate) {
            return res.status(400).json("No te puedes registrar, ese email ya está registrado")
        }

        const userDB = await newUser.save();
        return res.status(201).json(userDB);

    } catch (error) {
        return res.status(400).json("Error registrando el usuario")
    }
}

const login = async (req, res, next) => {

    try {
        
        const userDB = await User.findOne({ email: req.body.email });

        if (!userDB) {
            return res.status(400).json("Email incorrecto");
        }

        if (bcrypt.compareSync(req.body.password, userDB.password)) {
            const llave = generateSign(userDB._id);
            return res.status(200).json({ llave, userDB });
        } else {
            return res.status(400).json("Contraseña incorrecta");
        }

    } catch (error) {
        return res.status(400).json("Error logueando al usuario")
    }

}

module.exports = { register, login }