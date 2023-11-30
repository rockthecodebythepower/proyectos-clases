const { isAuth, isPaquito } = require("../../middlewares/auth");
const { register, login, deleteUser, getUsers } = require("../controllers/user");

const usersRoutes = require("express").Router();

usersRoutes.get("/", [isAuth], getUsers);
usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.delete("/:id", [isPaquito], deleteUser);

module.exports = usersRoutes;