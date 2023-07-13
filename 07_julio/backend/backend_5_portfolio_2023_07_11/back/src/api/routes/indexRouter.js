const projectRoutes = require("./projects");
const indexRouter = require("express").Router();

indexRouter.use("/projects", projectRoutes);

module.exports = indexRouter;