const { register, login, addFunko } = require("../controllers/users");

const usersRouter = require("express").Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.put("/:idUser/:idFunko", addFunko);

module.exports = usersRouter;