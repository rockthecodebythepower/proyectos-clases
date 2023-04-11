//! me traigo la librería express para el servidor
const express = require("express");
require("dotenv").config();

//? importaciones necesarias
const indexRoutes = require("./routes/indexRoutes");
const { connectDb } = require("./config/db");
const { setError } = require("./config/error");

const PORT = process.env.PORT;

//! ejectuto express para crear mi servidor
const app = express();

//!! para que nuestro servidor sepa interpretar contenido de tipo json del req.body por ejemplo
app.use(express.json());

//? ejecución de la función que conecta con la bbdd
connectDb();

//! utilizo mi servidor para que en la ruta /api/v1 me envíe a mi gestionador de rutas de indexRoutes
app.use("/api/v1", indexRoutes);

app.use("*", (req, res, next) => {
    return next(setError(404, "Rute not found"))
});

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || "Unexpected error");
})

//! levanto el servidor en el puerto 4000
app.listen(PORT, () => {
    console.log("Servidor levantado en: http://localhost:" + PORT);
})