const { getAllFunkos, getFunkoById, getFunkoByName, postFunko, putFunko, deleteFunko } = require("../controllers/funkos");

const funkosRouter = require("express").Router();

funkosRouter.get("/", getAllFunkos);
funkosRouter.get("/:id", getFunkoById);
funkosRouter.get("/getByName/:nombre", getFunkoByName);
funkosRouter.post("/", postFunko);
funkosRouter.put("/:id", putFunko);
funkosRouter.delete("/:id", deleteFunko);

module.exports = funkosRouter;