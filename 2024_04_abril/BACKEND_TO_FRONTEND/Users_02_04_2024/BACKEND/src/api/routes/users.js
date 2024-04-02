const { isAdmin } = require("../../middlewares/isAdmin");
const { isAuth } = require("../../middlewares/isAuth");
const { register, login, getUsers, getUser, modifyUser, deleteUser, checkSession } = require("../controllers/users");

const usersRouter = require("express").Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/checksession", isAuth, checkSession);
usersRouter.get("/:id", getUser);
usersRouter.get("/", isAuth, getUsers);
usersRouter.put("/:id", modifyUser);
usersRouter.delete("/:id", isAuth, isAdmin, deleteUser);

module.exports = usersRouter;