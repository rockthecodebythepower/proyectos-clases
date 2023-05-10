const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, unique: true, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    rol: {
      type: String,
      emun: ["user", "admin"],
      required: true,
      default: "user",
    },
  },
  {
    collection: "users",
  }
);

userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model("users", userSchema);
module.exports = User;