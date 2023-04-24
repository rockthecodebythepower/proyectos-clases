const { getAllPalettes } = require("../controllers/palette");

const palettesRoutes = require("express").Router();

palettesRoutes.get("/", getAllPalettes);

module.exports = palettesRoutes;