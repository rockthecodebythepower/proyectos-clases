const { newEntrada, getEntrada } = require("./entradas.controller");

const entradasRoutes = require("express").Router();

entradasRoutes.post("/:dni", newEntrada);
entradasRoutes.get("/:dni", getEntrada);

module.exports = entradasRoutes;