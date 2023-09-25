const upload = require("../../utils/Cloudinary/file");
const { register, login, getUsers, getUserById, updateUser } = require("../controllers/user");

const userRoutes = require("express").Router();

userRoutes.post("/register", upload.single("image"), register);
userRoutes.post("/login", login);
userRoutes.get("/:id", getUserById);
userRoutes.get("/", getUsers);
userRoutes.put("/:id", upload.single("image"), updateUser);

module.exports = userRoutes;