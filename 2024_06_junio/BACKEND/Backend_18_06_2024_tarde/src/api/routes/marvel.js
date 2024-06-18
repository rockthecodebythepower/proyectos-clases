const { getMarvel, createMarvel, updateMarvel, deleteMarvel } = require("../controllers/marvel");
const marvelRouter = require("express").Router();

marvelRouter.get("/", getMarvel); // read
marvelRouter.post("/", createMarvel); // creación
marvelRouter.put("/:id", updateMarvel); // actualizar (patch)
marvelRouter.delete("/:id", deleteMarvel); // delete (eliminar)

module.exports = marvelRouter;