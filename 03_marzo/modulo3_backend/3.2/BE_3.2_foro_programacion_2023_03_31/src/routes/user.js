const { register, updateUser, getAllUsers, login } = require("../controllers/user");
const { isAuth } = require("../middlewares/auth");
const upload = require("../middlewares/file");

const UserRoutes = require("express").Router();

UserRoutes.get("/", [isAuth], getAllUsers);
UserRoutes.post("/", upload.single("photo"), register);
UserRoutes.post("/login", login);
UserRoutes.put("/:id", upload.single("photo"), updateUser);


module.exports = UserRoutes;