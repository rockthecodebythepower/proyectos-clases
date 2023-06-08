require("dotenv").config();
const express = require("express");
const indexRouter = require("./src/api/routes/indexRouter");
const { connectDB } = require("./src/config/db");
const { setError } = require("./src/config/error");
const cors = require("cors");

const server = express();
connectDB();

server.use(cors())

server.use("/api/v1", indexRouter);

server.use("*", (req, res, next) => {
    return next(setError(404, "Ruta no encontrada 🐧"));
})

server.use((error, req, res, next) => {
    return res.status(error.status || 400).json(error.message || "Unexpected Error 😑");
})

server.listen(3000, () => {
    console.log("Servidor furulando en: http://localhost:3000");
})