const palettesRoutes = require("./palette");

const indexRoutes = require("express").Router();

indexRoutes.use("/palettes", palettesRoutes);

indexRoutes.use("/", (req, res, next) => {
    return res.json("Esto funciona")
})

module.exports = indexRoutes;