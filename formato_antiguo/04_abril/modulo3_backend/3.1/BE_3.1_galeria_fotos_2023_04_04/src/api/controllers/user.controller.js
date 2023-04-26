const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const {generateToken} = require("../../utils/token")

const registerUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    const userExists = await User.findOne({username: newUser.username})
    if (userExists) {
      return next("User already exists")
    }

    const createdUser = await newUser.save()
    return res.status(201).json({
      username: createdUser.username,
      _id: createdUser._id,
    })
  } catch (error) {
    return next(error)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.body.username})

    if (!user) {
      return next("User not found")
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateToken(user._id, user.username)
      return res.status(200).json({
        user: {
          username: user.username,
          _id: user._id,
        },
        token: token,
      })
    }
  } catch (error) {
    return next(error)
  }
}

module.exports = {registerUser, loginUser}
