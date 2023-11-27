// npm i dotenv - acceder a las variables de entorno - se suele configurar en la línea 1 de nuestro index.js
require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const cuadroRoutes = require("./src/api/routes/cuadro");

const app = express();

connectDB();

// esta línea es para configurar que nuestro servidor pueda recibir req.body de formato json
app.use(express.json());

app.use("/api/v1/cuadros", cuadroRoutes);

app.use("/ping", (req, res, next) => {
    return res.status(200).json("pong");
});

app.use("*", (req, res, next) => {
    return res.status(400).json("Rute not found");
});

app.listen(3000, () => {
    console.log("servidor desplegado en http://localhost:3000");
});