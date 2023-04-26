const { getPedidos, postPedido, getPedidoById, putPedido } = require("../controllers/pedido");

const pedidosRouter = require("express").Router();

pedidosRouter.get("/", getPedidos);
pedidosRouter.get("/:id", getPedidoById);
pedidosRouter.post("/", postPedido);
pedidosRouter.put("/:id", putPedido);

module.exports = pedidosRouter;