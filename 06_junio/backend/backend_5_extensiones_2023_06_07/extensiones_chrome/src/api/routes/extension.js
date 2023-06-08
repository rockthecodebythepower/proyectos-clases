const { publicarSemilla, getExtensionesByRated } = require("../controllers/extension");
const extensionesRoutes = require("express").Router();

extensionesRoutes.all("/semilla", publicarSemilla);
extensionesRoutes.get("/:puntuacion", getExtensionesByRated);

module.exports = extensionesRoutes;