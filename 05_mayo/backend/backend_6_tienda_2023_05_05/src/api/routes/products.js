const { getAllProducts, postProduct, getFilteredProducts } = require("../controllers/products");
const productsRoutes = require("express").Router();

productsRoutes.get("/", getAllProducts);
productsRoutes.get("/filter", getFilteredProducts);
productsRoutes.post("/", postProduct);

module.exports = productsRoutes;