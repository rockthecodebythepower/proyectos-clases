const productsRoutes = require("./products");

const indexRouter = require("express").Router();

indexRouter.use("/products", productsRoutes);

indexRouter.use("/", (req, res, next) => {
    return res.json("Esto funciona pepino 🤖")
})

module.exports = indexRouter;