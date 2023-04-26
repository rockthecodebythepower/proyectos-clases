const { register } = require("../controllers/user");
const upload = require("../middlewares/file");

const UserRoutes = require("express").Router();

UserRoutes.post("/", upload.single("photo"), register);

module.exports = UserRoutes;