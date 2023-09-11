const { postHouse, getAllHouses, getHouse } = require("../controllers/house");

const houseRoutes = require("express").Router();

houseRoutes.post("/", postHouse);
houseRoutes.get("/:id", getHouse);
houseRoutes.get("/", getAllHouses);

module.exports = houseRoutes;