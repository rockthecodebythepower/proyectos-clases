const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    job: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', UserSchema)
module.exports = User
