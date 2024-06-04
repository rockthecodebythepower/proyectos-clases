const {
  postWork,
  /* putWork, */ getWorkFilter,
  getWorks,
} = require("../controller/work");

const workRouter = require("express").Router();

// crear nuevas obras
workRouter.post("/", postWork);
// actualizar las obras
/* workRouter.put("/:id", putWork); */
// get obra
workRouter.get("/:location", getWorkFilter);
// get obras
workRouter.get("/", getWorks);

module.exports = workRouter;
