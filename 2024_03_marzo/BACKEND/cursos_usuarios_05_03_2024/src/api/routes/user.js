const { isAuth } = require("../../middlewares/auth");
const { register, login, updateUser } = require("../controllers/user");
const userRouter = require("express").Router();

userRouter.post("/login", login);
userRouter.post("/", register);
userRouter.put("/:id", isAuth, updateUser);

module.exports = userRouter;