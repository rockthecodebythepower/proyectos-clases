const KioskoRouter = require("./kiosko");
const ProductoRouter = require("./producto");

const IndexRouter = require("express").Router();

IndexRouter.use("/saludo", (req, res) => {
    return res.json("Hola desde indexRouter");
});

IndexRouter.use("/kiosko", KioskoRouter);
IndexRouter.use("/producto", ProductoRouter);

module.exports = IndexRouter;