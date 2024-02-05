const User = require("../api/models/users");
const multer = require("multer");

const upload = multer();

const userDuplicated = async (req, res, next) => {
  const user = await User.findOne({ userName: req.body.userName });

  if (user) {
    return res.status(400).json("Usuario ya existente");
  }

  next();
};

const handleFormData = upload.fields([
  { name: "userName" },
  { name: "password" },
  { name: "perfil" },
]);

module.exports = { userDuplicated, handleFormData };
