const { getTortugas, createTortuga, deleteTortuga } = require("../controllers/tortuga");
const tortugasRouter = require("express").Router();

tortugasRouter.get("/", getTortugas);
tortugasRouter.post("/", createTortuga);
tortugasRouter.delete("/:id", deleteTortuga);

module.exports = tortugasRouter;