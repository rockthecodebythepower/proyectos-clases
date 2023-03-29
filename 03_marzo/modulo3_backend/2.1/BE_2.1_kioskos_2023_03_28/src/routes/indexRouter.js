const KioskoRouter = require("./kiosko");

const IndexRouter = require("express").Router();

IndexRouter.use("/saludo", (req, res) => {
    return res.json("Hola desde indexRouter");
});

IndexRouter.use("/kiosko", KioskoRouter);

module.exports = IndexRouter;