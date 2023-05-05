const express = require("express");

const {getUsers, register, login} = require("../controllers/user.controllers");

const isAuth = require("../../middlewares/auth.middleware");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getUsers);
UserRouter.post("/register", register);
UserRouter.post("/login", login);

module.exports = UserRouter;
