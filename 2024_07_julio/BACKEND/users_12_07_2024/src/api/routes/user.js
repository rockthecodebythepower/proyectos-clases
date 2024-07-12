const { isAuth } = require("../../middlewares/isAuth");
const { register, getUsers, login } = require("../controllers/user");
const userRoutes = require("express").Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/", isAuth, getUsers);

module.exports = userRoutes;