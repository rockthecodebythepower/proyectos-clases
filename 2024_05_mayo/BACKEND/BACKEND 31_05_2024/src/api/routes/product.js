const { getProducts, postProduct } = require("../controllers/product");

const productRouter = require("express").Router();

productRouter.get("/", getProducts);
productRouter.post("/", postProduct);

module.exports = productRouter;