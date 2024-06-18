const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String, required: true },
    def: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("users", userSchema, "users");
module.exports = User;