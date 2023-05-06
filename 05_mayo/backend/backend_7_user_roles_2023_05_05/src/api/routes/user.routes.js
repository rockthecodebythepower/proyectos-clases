const express = require("express");

const {getUsers, register, login, modifyUser} = require("../controllers/user.controllers");

const { isUser } = require("../../middlewares/auth.middleware");

const UserRouter = express.Router();

UserRouter.get("/", [isUser], getUsers);
UserRouter.put("/:id", [isUser], modifyUser)
UserRouter.post("/register", register);
UserRouter.post("/login", login);

module.exports = UserRouter;