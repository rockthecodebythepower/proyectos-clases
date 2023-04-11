const { getProducts, postProduct, getProductById, putProduct, deleteProduct } = require("../controllers/producto");

const productsRouter = require("express").Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductById);
productsRouter.post("/", postProduct);
productsRouter.put("/:id", putProduct);
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;