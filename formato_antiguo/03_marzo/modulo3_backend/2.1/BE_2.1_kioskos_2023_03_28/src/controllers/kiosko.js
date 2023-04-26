const Kiosko = require("../models/kiosko");

const getAllKioskos = async (req, res, next) => {
  try {
    const kioskoDB = await Kiosko.find();
    return res.status(200).json(kioskoDB);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "Error al leer los kioskos", error: error });
  }
};

const postNewKiosko = async (req, res, next) => {
  try {
    //! req -> request -> petición -> obtengo el body
    const newKiosko = new Kiosko(req.body);
    const kioskoDB = await newKiosko.save();
    return res.status(201).json(kioskoDB);

  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "Error al crear el kiosko", error: error });
  }
};

module.exports = {
  getAllKioskos,
  postNewKiosko
};
