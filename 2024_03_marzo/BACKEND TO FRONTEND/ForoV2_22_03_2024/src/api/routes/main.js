const commentsRouter = require("./comments");
const foroRouter = require("./foro");
const userRouter = require("./users");

const mainRouter = require("express").Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/comments", commentsRouter);
mainRouter.use("/foro", foroRouter);

module.exports = mainRouter;