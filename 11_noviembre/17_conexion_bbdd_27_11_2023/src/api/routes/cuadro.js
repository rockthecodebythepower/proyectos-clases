const { getCuadros, postCuadro } = require("../controllers/cuadro");

const cuadroRoutes = require("express").Router();

cuadroRoutes.get("/", getCuadros);
cuadroRoutes.post("/", postCuadro);

module.exports = cuadroRoutes;