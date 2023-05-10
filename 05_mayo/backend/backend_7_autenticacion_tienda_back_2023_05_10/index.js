const express = require("express");
const { connectDB } = require("./src/utils/database/db");
const userRoutes = require("./src/api/routes/users");
require("dotenv").config();
const cors = require("cors");

const server = express();
connectDB();

server.use(express.json());

server.use(cors())

server.use("/api/v1/users", userRoutes);

server.use("*", (req, res, next) => {
    return res.status(404).json("Ruta no encontrada 🤔");
});

server.listen(3000, () => {
    console.log("Servidor levantado en: http://localhost:3000  🤯");
});