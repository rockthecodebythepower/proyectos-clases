const recordRoutes = require("./records");
const indexRouter = require("express").Router();


indexRouter.use("/records", recordRoutes)

indexRouter.use("/", (req, res, next) => {
    return res.status(200).json("Esto funciona correctamente 😜");
})

module.exports = indexRouter;