const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema, "users");
module.exports = User;