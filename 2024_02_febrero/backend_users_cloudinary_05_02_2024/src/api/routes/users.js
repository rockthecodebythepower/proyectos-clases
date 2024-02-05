const upload = require("../../middlewares/file");
const {
  userDuplicated,
  handleFormData,
} = require("../../middlewares/userDuplicated");
const { register } = require("../controllers/users");

const userRouter = require("express").Router();

userRouter.post(
  "/register",
  handleFormData,
  userDuplicated,
  upload.single("perfil"),
  register
);

module.exports = userRouter;
