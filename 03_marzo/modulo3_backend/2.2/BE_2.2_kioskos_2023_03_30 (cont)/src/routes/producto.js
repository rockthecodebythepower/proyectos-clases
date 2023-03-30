const { getAllProductos, postNewProducto, updateProducto, deleteProducto, getProductoById } = require("../controllers/producto");

const ProductoRouter = require("express").Router();

ProductoRouter.get("/", getAllProductos);
ProductoRouter.get("/:id", getProductoById);
ProductoRouter.post("/", postNewProducto);
ProductoRouter.put("/:id", updateProducto);
ProductoRouter.delete("/:id", deleteProducto);

module.exports = ProductoRouter