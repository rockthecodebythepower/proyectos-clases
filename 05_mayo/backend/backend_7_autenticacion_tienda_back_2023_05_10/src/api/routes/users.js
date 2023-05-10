const { getAllUsers, register, login } = require("../controllers/users");

const userRoutes = require("express").Router();


userRoutes.get("/", getAllUsers);
userRoutes.post("/register", register);
userRoutes.post("/login", login);


module.exports = userRoutes;