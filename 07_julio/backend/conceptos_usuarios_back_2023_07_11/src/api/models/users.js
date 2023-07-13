const mongoose = require("mongoose");
// me traigo la librería bcrypt para que ANTES de guardar el usuario en la bbdd se encripte la contraseña
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    rol: {
      type: String,
      trim: true,
      required: true,
      default: "user",
      enum: ["user", "admin", "medica", "enfermero"],
    },
  },
  {
    collection: "users",
  }
);

// la función para encriptar la contraseña que ocurre ANTES de que se GUARDE
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("users", userSchema, "users");
module.exports = User;
