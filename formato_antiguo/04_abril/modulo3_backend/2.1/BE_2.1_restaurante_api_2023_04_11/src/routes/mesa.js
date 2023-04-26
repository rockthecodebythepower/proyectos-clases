const { getMesas, getMesaById, postMesa, putMesa, deleteMesa } = require("../controllers/mesa");

const mesasRouter = require("express").Router();

mesasRouter.get("/", getMesas);
mesasRouter.get("/:id", getMesaById);
mesasRouter.post("/", postMesa);
mesasRouter.put("/:id", putMesa);
mesasRouter.delete("/:id", deleteMesa);

module.exports = mesasRouter;