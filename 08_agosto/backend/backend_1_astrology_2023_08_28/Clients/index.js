//? configurar dotenv
require("dotenv").config();

const cors = require("cors")

//! librería para todo el tema del servidor
const express = require("express");
const { connectDB } = require("./src/config/db");
const clientsRouter = require("./src/api/routes/client");

const app = express();

connectDB();

//* ruta + controlador
// controlador: función que se ejecuta cuando alguien pide algo a una ruta -> (req, res, next)
// ruta: una continuación de la url a la que accedes que cuando es pedida ejecuta el controlador que tenga a la derecha
//app.use("/", (req, res, next) => {
    // req - request - petición -> están todos los datos relevantes de la comunicación del cliente HACIA el servidor
    // res - response - respuesta -> están todos los datos relevantes de la comunicación del servidor HACIA el cliente
    // next - siguiente -> si tengo varios middleware pasar al siguiente
//     return res.json("Todo funciona correctamente");
// })

app.use(cors());

app.use(express.json());

app.use("/api/v1/clients", clientsRouter);

//? poner el servidor a escuchar
app.listen(3000, () => {
  console.log("servidor escuchando en http://localhost:3000");
});