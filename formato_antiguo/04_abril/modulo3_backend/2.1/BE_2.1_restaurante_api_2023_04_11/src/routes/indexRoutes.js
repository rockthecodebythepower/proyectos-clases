//? importaciones necesarias
const mesasRouter = require("./mesa");
const pedidosRouter = require("./pedido");
const productsRouter = require("./producto");

//! creación del ruter con express
const indexRoutes = require("express").Router();

//! declaraciones de rutas como en el index.js
indexRoutes.use("/products", productsRouter);
indexRoutes.use("/mesas", mesasRouter);
indexRoutes.use("/pedidos", pedidosRouter);

//* exportamos
module.exports = indexRoutes;