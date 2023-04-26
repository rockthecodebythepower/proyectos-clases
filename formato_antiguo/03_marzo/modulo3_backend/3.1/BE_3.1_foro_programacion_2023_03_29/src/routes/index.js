/* importar las rutas externas */

const UserRoutes = require("./user");

const indexRouter = require("express").Router();

/* indexRouter.use("/posts", PostRoutes); */
indexRouter.use("/users", UserRoutes);
/* indexRouter.use("/answers", AnswerRoutes); */

module.exports = indexRouter;