const upload = require("../../middlewares/file");
const { isAuth } = require("../../middlewares/isAuth");
const { register, login, getUsers } = require("../controllers/user");

const userRoutes = require("express").Router();

userRoutes.post("/register", upload.single("img"), register);
userRoutes.post("/login", login);
userRoutes.get("/", isAuth, getUsers);

module.exports = userRoutes;