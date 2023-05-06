const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return next("Cannot get users", error);
  }
};

const register = async (req, res, next) => {
  try {
    //Creamos un nuevo usuario
    const newUser = new User(req.body);
    //Vamos a comprobar si el usuario ya existe
    const userExists = await User.findOne({ username: newUser.username });
    //Si el usuario ya existe, nos salimos de la función con un mensaje
    if (userExists) {
      return next("User already exists!");
    }
    //Si el usuario es completamente nuevo...

    //! el rol de nuestro usuario SIEMPRE será user
    newUser.rol = "user";

    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    return next("Error creating user", error);
  }
};

const login = async (req, res, next) => {
  try {
    //Vamos a intentar encontrar al usuario por su username
    const user = await User.findOne({ username: req.body.username });
    //Si el usuario no existe
    if (!user) {
      return next("User not found!");
    }
    //Si el usuario existe...
    //Vamos a comparar con bcrypt la contraseña del body con la contraseña del usuario, y la vamos a desencriptar para saber si es la misma o no
    if (bcrypt.compareSync(req.body.password, user.password)) {
      //Si la contraseña coincide, creamos el token
      const token = generateToken(user._id, user.username);

      //Devolvemos la siguiente estructura en json
      return res.status(200).json({
        user: {
          username: user.username,
          _id: user._id,
        },
        token: token,
      });
    }
  } catch (error) {
    return next("User cannont login", error);
  }
};

const modifyUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    //? parseo el id del usuario de la petición puesto que me llega como objectid y lo tengo que comparar con un id simple
    let parsedUserId = JSON.stringify(req.user._id);
    parsedUserId = parsedUserId.replaceAll('"', "");

    //! sólo podrá continuar aquella persona que esté intentando modificarse a sí mismo o por el contrario que sea admin y pueda modificar a otros.
    if (id !== parsedUserId && req.user.rol !== "admin") {
      return res
        .status(400)
        .json(
          "No puedes modificar a un usuario que no seas tu mismo si no eres admin"
        );
    }

    const userModify = new User(req.body);

    userModify._id = id;

    //! si el usuario que intenta modificar los datos de si mismo tiene el rol user, le obligaremos a que el rol siga siendo user.
    if (req.user.rol === "user") {
      userModify.rol = "user";
    }

	if (req.body.password) {
		userModify.password = await bcrypt.hash(userModify.password, 10);
	}

    const userUpdated = await User.findByIdAndUpdate(id, userModify, {
      new: true,
    });

    return res.status(200).json(userUpdated);
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: "no se ha podido modificar el usuario", error });
  }
};

module.exports = { getUsers, register, login, modifyUser };
