const { setError } = require("../config/error");
const { findByIdAndDelete } = require("../models/kiosko");
const Kiosko = require("../models/kiosko");

const getAllKioskos = async (req, res, next) => {
  try {
    const kioskoDB = await Kiosko.find();
    return res.status(200).json(kioskoDB);
  } catch (error) {
    next(setError(500, "Error al leer los kioskos"));
  }
};

const getKioskoByName = async (req, res, next) => {
  try {

    const {name} = req.params;
    const kioskoDB = await Kiosko.findOne({nombre: name});
    return res.status(200).json(kioskoDB);
  } catch (error) {
    next(setError(500, "Error al obtener el kiosko"));
  }
};

const filterByCity = async (req, res, next) => {

  try {
    const {ciudad} = req.params;
    let kioskos = await Kiosko.find({ciudad});
    return res.status(200).json(kioskos);
  } catch (error) {
    next(setError(500, "Error al obtener los kioskos"));
  }

}

const postNewKiosko = async (req, res, next) => {
  try {
    //! req -> request -> petición -> obtengo el body
    /* const newKiosko = new Kiosko({
      ciudad: req.body.ciudad,
      CP: req.body.CP,
      nombre: req.body.nombre,
      productos: [...req.body.productos]
    }); */
    const newKiosko = new Kiosko(req.body);
    const kioskoDB = await newKiosko.save();
    return res.status(201).json(kioskoDB);
  } catch (error) {
    next(setError(500, "Error al crear el kiosko"));
  }
};

const updateKiosko = async (req, res, next) => {

  try {
    //! necesito identificar que kiosko quiero actualizar
    const { id } = req.params;
    const putKiosko = new Kiosko(req.body);
    putKiosko._id = id;
    const camposActualizados = req.body;

    const oldKiosko = await Kiosko.findById(id);
    const kioskoUpdated = await Kiosko.findByIdAndUpdate(id, putKiosko, {new: true});

    return res.status(200).json({new: kioskoUpdated, old: oldKiosko, camposActualizados});

  } catch (error) {
    next(setError(400, "No se ha podido actualizar el kiosko"))
  }

}

const deleteKiosko = async (req, res, next) => {
  try {

    const {id} = req.params;
    const eliminado = await Kiosko.findByIdAndDelete(id);
    return res.status(200).json({eliminado});

  } catch (error) {
    next(setError(400, "No se ha podido eliminar el kiosko"));
  }
}

module.exports = {
  getAllKioskos,
  postNewKiosko,
  updateKiosko,
  deleteKiosko,
  getKioskoByName,
  filterByCity
};