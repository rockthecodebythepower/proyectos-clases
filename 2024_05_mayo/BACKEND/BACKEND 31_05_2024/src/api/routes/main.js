const productRouter = require("./product");
const mainRouter = require("express").Router();

mainRouter.use("/products", productRouter);

module.exports = mainRouter;