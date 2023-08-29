// complicada de hacer en nativo -> express -> una librería que me ayuda a crear un servidor muy fácilmente
const express = require("express");// -> esta me sirve para todo lo que tenga que ver con el servidor

const app = express();

app.use("/", (req, res, next) => {
    // req - request - petición - datos de la comunicación del cliente HACIA el camarero
    // res - response - respuesta - datos de la comunicación del camarero HACIA el cliente
    // next - siguiente;

    return res.status(200).json("Bienvenido a nuestro restaurante");
})

app.use("*", (req, res, next) => {
    return res.status(404).json("Ruta no encontrada");
})

app.listen(3000, () => {
    console.log("nuestro camarero escucha en http://localhost:3000");
});