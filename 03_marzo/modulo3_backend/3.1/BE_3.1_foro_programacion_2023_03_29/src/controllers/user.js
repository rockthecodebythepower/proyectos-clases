const User = require("../models/user");
const { setError } = require("../config/error");

const register = async (req, res, next) => {

    try {
        
        const newUser = new User(req.body);

        if (req.file) {
            newUser.photo = req.file.path;
        }

        const userDB = await newUser.save();
        return res.status(201).json(userDB);

    } catch (error) {
        return next(setError(400, error));
    }

}

module.exports = {
    register
}