// configurar que pueda acceder a las variables del .env, se suele realizar lo primero de todo
require("dotenv").config();

// me traigo el módulo de express para poder crear el servidor
const express = require("express");
// me traigo la función de conexión con la bbdd que hemos creado previamente
const { connectDB } = require("./src/config/db");
const cuadrosRoutes = require("./src/api/routes/cuadro");
const artistsRoutes = require("./src/api/routes/artists");

// ejecutamos express y lo guardamos en una variable, en mi caso me gusta llamarle app porque así viene en la documentación de la librería
const app = express();

connectDB();

// req.body de formato json
app.use(express.json());

app.use("/api/v1/artists", artistsRoutes);
app.use("/api/v1/cuadros", cuadrosRoutes);

// ruta global, siempre la podremos abajo del todo de las rutas y se ejecutará cuando ninguna ruta que hayamos introducido se haya ejecutado, (Not found)
app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
});

// ponemos a escuchar a nuestro servidor
app.listen(3000, () => {
    console.log("http://localhost:3000");
});