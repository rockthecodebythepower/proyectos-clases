const characterRoutes = require("./characters");

const indexRouter = require("express").Router();

indexRouter.use("/characters", characterRoutes);

indexRouter.use("/", (req, res, next) => {
    return res.status(200).json("Esto funciona nikel 🤑");
})

module.exports = indexRouter;