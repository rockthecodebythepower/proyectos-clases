const { getCuadros, postCuadro, deleteCuadro, updateCuadro, getCuadrosByPrice } = require("../controllers/cuadro");

const cuadrosRoutes = require("express").Router();

cuadrosRoutes.get("/getByPrice/:precio", getCuadrosByPrice);
cuadrosRoutes.get("/", getCuadros);
cuadrosRoutes.post("/", postCuadro);
cuadrosRoutes.put("/:id", updateCuadro);
cuadrosRoutes.delete("/:id", deleteCuadro);

module.exports = cuadrosRoutes;