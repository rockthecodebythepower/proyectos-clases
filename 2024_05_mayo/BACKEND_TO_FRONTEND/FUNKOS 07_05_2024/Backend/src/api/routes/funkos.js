const { getFunkos } = require("../controllers/funkos");
const funkosRouter = require("express").Router();

funkosRouter.get("/", getFunkos);

module.exports = funkosRouter;