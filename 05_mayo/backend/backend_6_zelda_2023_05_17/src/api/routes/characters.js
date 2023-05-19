const { getCharacters } = require("../controllers/characters");

const characterRoutes = require("express").Router();

characterRoutes.get("/", getCharacters);

module.exports = characterRoutes;