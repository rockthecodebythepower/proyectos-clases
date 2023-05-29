const { getAllPlatos, postPlato } = require("../controllers/plato");

const platosRoutes = require("express").Router();

platosRoutes.get("/", getAllPlatos);
platosRoutes.post("/", postPlato);

module.exports = platosRoutes;