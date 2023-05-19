require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/utils/db");
const indexRouter = require("./src/api/routes/indexRouter");

const app = express();

connectDB();

app.use("/api/v1", indexRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("No se ha encontrado esta ruta 🐥")
})

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000 🦦");
})