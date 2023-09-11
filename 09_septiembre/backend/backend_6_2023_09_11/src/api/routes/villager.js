const { reloadVillagers } = require("../controllers/villager");

const villagerRoutes = require("express").Router();

villagerRoutes.post("/reloadvillagers", reloadVillagers);

module.exports = villagerRoutes;