const { isAuth } = require("../../middlewares/auth");
const { register, login } = require("../controllers/users");
const userRoutes = require("express").Router();

userRoutes.post("/register", isAuth(["admin"]), register);
userRoutes.post("/login", login);

module.exports = userRoutes;