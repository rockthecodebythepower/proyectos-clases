const { deleteFile } = require("../../utils/deleteFile");
const User = require("../models/users");

const register = async (req, res, next) => {
  try {
    const user = new User(req.body);

    user.perfil = req?.file?.path;

    const userSaved = await user.save();

    return res.status(201).json({
      message: "Usuario creado",
      user: userSaved,
    });
  } catch (error) {
    deleteFile(req?.file?.path);
    return res.status(400).json("error");
  }
};

module.exports = {
  register,
};
