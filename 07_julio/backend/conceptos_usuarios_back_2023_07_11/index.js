require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const userRoutes = require("./src/api/routes/users");
const { isAuth } = require("./src/middlewares/auth");

const server = express();

connectDB();

server.use(express.json());

// de momento esto no tiene puerta
server.use("/api/v1/privada", isAuth(["medica", "admin"]), (req, res, next) => {
    return res.json("ESTAS VIENDO ALGO PRIVADO");
})

server.use("/api/v1/users", userRoutes);

server.use("/api/v1", (req, res, next) => {
    return res.json("Esto funciona gucci")
})

server.listen(3000, () => {
    console.log("Servidor levantado en http://localhost:3000");
})