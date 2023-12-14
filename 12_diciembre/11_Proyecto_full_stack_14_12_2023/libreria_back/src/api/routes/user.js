const { isAuth } = require("../../middlewares/auth");
const { getUsers, getUserById, register, login, updateUser } = require("../controllers/user");

const usersRouter = require("express").Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.put("/:id", isAuth, updateUser);

module.exports = usersRouter;