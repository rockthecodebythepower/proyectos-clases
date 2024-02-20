const { getIas, getIaById, getIasByCategory, postIas, deleteIas } = require("../controllers/ias");

const iasRouter = require("express").Router();

iasRouter.get("/:id", getIaById);
iasRouter.get("/", getIas);
iasRouter.get("/category/:category", getIasByCategory);
iasRouter.post("/", postIas);
iasRouter.delete("/:id", deleteIas);

module.exports = iasRouter;