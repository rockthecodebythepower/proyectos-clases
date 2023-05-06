const express = require("express");
const { connectDB } = require("./src/utils/db");
const indexRouter = require("./src/api/routes/indexRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());

app.use("/api/v1", indexRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Ruta no encontrada");
})

app.listen(3000, () => {
    console.log("Servidor levantado en: http://localhost:3000/api/v1");
})