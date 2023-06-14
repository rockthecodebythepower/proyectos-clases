//! me importo la librería del servidor llamada express
const express = require("express");

const cloudinary = require("cloudinary").v2;

require("dotenv").config();

const { connectDB } = require("./src/config/db");
const charactersRoutes = require("./src/api/routes/characters");

//? conectarme con la bbdd
connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

//! creamos el server
const server = express();

server.use(express.json())

server.use("/api/v1/characters", charactersRoutes);

server.listen(3000, () => {
    console.log("Servidor funcionando en: http://localhost:3000 🤑");
})