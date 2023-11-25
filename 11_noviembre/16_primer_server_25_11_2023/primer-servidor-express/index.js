//! librería por excelencia para nuestro servidor - express - generar el servidor, escuchar peticiones, organizar enrutado, utilizar opciones
const express = require("express");
const cors = require("cors");

// ejecuto express y lo guardo en la variable app, que utilizaré de ahora en adelante para gestionar las primeras rutas de nuestro servidor, poner a escuchar a nuestro servidor y utilizar diferentes herramientas
const app = express();

app.use(cors());

const products = [
    {
        nombre: "Sofá",
        precio: 300
    },
    {
        nombre: "TV",
        precio: 400
    },
    {
        nombre: "Lampara",
        precio: 20
    },
    {
        nombre: "Puzzle",
        precio: 25
    },
]

//? declarado una función, el nombre de la función es pong y esta función se ejecuta mediante una petición, esto significa que la petición cuando se lance, me enviará 3 parámetros. 
const pong = (req, res, next) => {
    //! 1 - req - request - petición - la información de la petición del cliente al servidor
    //! 2 - res - response - respuesta - la información de la respuesta del servidor al cliente
    //! 3 - next - será una función que me permita seguir al siguiente middleware de una ruta

    return res.status(200).json("pong");
}

const getProducts = (req, res, next) => {
    return res.status(200).json(products);
}

const getProductsByPrice = (req, res, next) => {
    return res.status(200).json(products.filter((product) => product.precio < parseInt(req.params.precio)));
}

const probarQuery = (req, res, next) => {
    return res.status(200).json(req.body);
}

app.use(express.json());

app.use("/ping", pong);
app.use("/products/:precio", getProductsByPrice);
app.use("/products", getProducts);
app.use("/prueba", probarQuery);

app.listen(3000, () => {
    console.log("http://localhost:" + 3000);
});