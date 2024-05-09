const { generateKey } = require("../../utils/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);

    newUser.password = bcrypt.hashSync(newUser.password, 10);

    const user = await newUser.save();

    return res.json(user);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json("error");
    }

    if (bcrypt.compareSync(password, user.password)) {
        const token = generateKey(user._id);
        return res.json({ token, user });
    } else {
        return res.status(400).json("error");
    }

  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = {
  register,
  login,
};
