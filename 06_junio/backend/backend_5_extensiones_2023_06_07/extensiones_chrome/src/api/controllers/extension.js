const { setError } = require("../../config/error");
const extensiones = require("../../data/extensiones");
const Extension = require("../models/extension");

const publicarSemilla = async (req, res, next) => {
  try {
    const allExtensiones = await Extension.find();

    if (allExtensiones) {
      await Extension.collection.drop();
    }

    const extensionesCreadas = await Extension.insertMany(extensiones);

    return res.status(201).json(extensionesCreadas);
  } catch (error) {
    return next(setError(400, "Error al ejecutar el insertMany"));
    /* return res.status(400).json("Error al ejecutar el insertMany"); */

    //! cuando a next le pasas un error se va al control de errores
  }
};

const getExtensionesByRated = async (req, res, next) => {
  try {
    //! coger TODAS las extensiones
    const extensionesFiltered = await Extension.find({
      puntuacion: { $gte: parseInt(req.params.puntuacion) },
    });

    /* const extensionesFiltered = allExtensiones.filter(
      (extension) => extension.puntuacion >= parseInt(req.params.puntuacion)
    ); */

    return res.status(200).json(extensionesFiltered);
  } catch (error) {
    return next(setError(400, "Error desconocido"));
  }
};

module.exports = { publicarSemilla, getExtensionesByRated };
