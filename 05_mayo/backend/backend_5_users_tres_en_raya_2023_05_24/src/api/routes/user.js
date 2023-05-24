const { isAuth } = require("../../middlewares/auth");
const { getAllUsers, register, login, changePuntuacion, checksession } = require("../controllers/user");

const userRouter = require("express").Router();

userRouter.get("/", [isAuth] , getAllUsers);
userRouter.post("/checksession", [isAuth], checksession);
userRouter.put("/changePuntuacion/:id", [isAuth], changePuntuacion);
userRouter.post("/", register);
userRouter.post("/login", login);

module.exports = userRouter;