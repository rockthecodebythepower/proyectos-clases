const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  courses: [{ type: mongoose.Types.ObjectId, ref: "courses" }],
  password: { type: String, required: true },
  rol: { type: String, required: true, enum: ["user", "admin"] },
});

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("users", userSchema, "users");
module.exports = User;
