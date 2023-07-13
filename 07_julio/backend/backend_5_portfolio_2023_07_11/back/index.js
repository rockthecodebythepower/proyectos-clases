require("dotenv").config();
const express = require("express");
const indexRouter = require("./src/api/routes/indexRouter");
const { connectDB } = require("./src/config/db");
const cors = require("cors");

const server = express();

connectDB();

server.use(express.json());
server.use(cors());

server.use("/api/v1", indexRouter);

server.use("*", (req, res, next) => {
    return res.status(404).json("Ruta no encontrada")
})

server.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
})