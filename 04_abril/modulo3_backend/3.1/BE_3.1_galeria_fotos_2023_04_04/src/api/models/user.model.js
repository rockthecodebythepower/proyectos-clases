const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    minlength: [4, "Min 4 characters"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "Min 8 characters"],
  },
})

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10)
    next()
  } catch (error) {
    next("Error hashing password", error)
  }
})

const User = mongoose.model("User", UserSchema)
module.exports = User
