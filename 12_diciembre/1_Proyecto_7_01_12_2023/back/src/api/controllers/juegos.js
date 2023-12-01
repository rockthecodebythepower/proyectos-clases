const Juego = require("../models/juegos");

const getJuegos = async (req, res, next) => {
  try {
    const juegos = await Juego.find({ verified: true });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

const getJuegosAdmin = async (req, res, next) => {
  try {
    const juegos = await Juego.find({ verified: false });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

const getJuegoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juego = await Juego.findById(id);
    return res.status(200).json(juego);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

const getJuegosByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const juegos = await Juego.find({ categoria });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

const getJuegosByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params;
    const juegos = await Juego.find({ precio: { $lte: precio } });
    return res.status(200).json(juegos);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

const postJuego = async (req, res, next) => {
  try {
    const newJuego = new Juego(req.body);

    // queremos que el juego si lo está creando un usuario normal el campo verified esté obligatoriamente en false
    // cuando lo crea un admin está en true

    if (req.user.rol === "admin") {
      newJuego.verified = true;
    } else {
      newJuego.verified = false;
    }

    const juegoSaved = await newJuego.save();

    return res.status(201).json(juegoSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const putJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newJuego = new Juego(req.body);
    newJuego._id = id;
    const juegoUpdated = await Juego.findByIdAndUpdate(id, newJuego, {
      new: true,
    });
    return res.status(200).json(juegoUpdated);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

const deleteJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juegoDeleted = await Juego.findByIdAndDelete(id);
    return res.status(200).json(juegoDeleted);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

module.exports = {
  getJuegos,
  getJuegoById,
  getJuegosByCategory,
  getJuegosByPrice,
  postJuego,
  putJuego,
  deleteJuego,
  getJuegosAdmin
};
