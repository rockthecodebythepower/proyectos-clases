const funkosRouter = require("./funkos");
const indexRoutes = require("express").Router();

indexRoutes.use("/funkos", funkosRouter);

indexRoutes.use("/", (req, res, next) => {
    res.json("Esto funciona")
})

module.exports = indexRoutes;