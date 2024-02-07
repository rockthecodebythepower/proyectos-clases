//! creación de nuestro primer servidor
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/utils/db");
const Movie = require("./src/api/models/movies");

const app = express();

app.use(cors());

connectDB();

app.use("*", (req, res) => {
    return res.status(404).json("Route not found")
});

app.listen(3000, () => {
  console.log("Estoy levantado en: http://localhost:3000");
});

/* const funcion = () => {
    return {
        listen: () => {
            console.log("Cubro x funcionalidad");
        },
        name: "paquito"
    }
}

const objetoDeLaFuncion = funcion();

console.log(objetoDeLaFuncion);

objetoDeLaFuncion.listen(); */
