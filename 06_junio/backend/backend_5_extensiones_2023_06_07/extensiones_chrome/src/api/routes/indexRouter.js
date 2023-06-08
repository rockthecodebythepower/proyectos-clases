const extensionesRoutes = require("./extension");
const indexRouter = require("express").Router();

indexRouter.use("/extensiones", extensionesRoutes);

module.exports = indexRouter;