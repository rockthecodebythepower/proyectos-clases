const menusRoutes = require("./menu");
const platosRoutes = require("./plato");

const indexRouter = require("express").Router();

indexRouter.use("/platos", platosRoutes);
indexRouter.use("/menus", menusRoutes);

module.exports = indexRouter;