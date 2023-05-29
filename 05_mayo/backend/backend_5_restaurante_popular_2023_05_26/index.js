require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const indexRouter = require("./src/api/routes/indexRouter");

const server = express();
connectDB();

server.use(express.json());

server.use("/api/v1", indexRouter);

const notFoundMessage = (req, res, next) => {
    return res.status(404).json("Route not found 💥");
}

server.use("*", notFoundMessage);

const mensajeServerUp = () => {
    console.log("Servidor levantado en http://localhost:3000");
}

server.listen(3000, mensajeServerUp);