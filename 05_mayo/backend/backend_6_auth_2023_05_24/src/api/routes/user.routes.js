const express = require("express");
const isAuth = require("../../middlewares/auth.middleware");

const {
	getAllUsers,
	register,
	login,
} = require("../controllers/user.controllers");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getAllUsers);
UserRouter.post("/login", login);
UserRouter.post("/register", register);

module.exports = UserRouter;
