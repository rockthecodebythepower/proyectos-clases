const express = require("express");
const {
	getAllUsers,
	login,
	register,
} = require("../controllers/user.controllers");
const isAuth = require("../../middlewares/auth.middleware");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getAllUsers);
UserRouter.post("/register", register);
UserRouter.post("/login", login);

module.exports = UserRouter;
