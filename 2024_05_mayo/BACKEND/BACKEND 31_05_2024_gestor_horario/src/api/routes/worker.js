const {
  postWorker,
  /*   putWorker, */
  getWorker,
  getWorkers,
} = require("../controller/worker");

const workerRouter = require("express").Router();

// dar de alta a nuevos trabajadores
workerRouter.post("/", postWorker);
// actualizar un trabajador
/* workerRouter.put("/:id", putWorker); */
// get trabajor
workerRouter.get("/filter", getWorker);
// get trabajores
workerRouter.get("/", getWorkers);

module.exports = workerRouter;
