//! la libería dotenv cuando la configuramos nos servirá para poder acceder a las variables del .env (process.env.VARIABLE);
require("dotenv").config();

//! sirve para temas de servidor
const express = require("express");

//! importación de la función connectDB que hemos creado nosotros para conectarnos con la bbdd
const { connectDB } = require("./src/utils/db");

//! importación del indexRouter que será el enrutado principal de nuestra api
const indexRouter = require("./src/api/routes/indexRouter");

//? ejecutamos la librería express para poder acceder a todos sus métodos, en este caso lo guardamos dentro de la variable app
const app = express();

//! ejecutamos la función connectDB que habíamos importado anteriormente, nos conectaremos en este punto con la bbdd
connectDB();

//? mi api no podría leer el body de tipo json de una petición si no fuese por esta línea
app.use(express.json());

//! estamos utilizando nuestro servidor para declarar una ruta, las rutas, se van concatenando y en este caso la ruta /api/v1 enlazará con el enrutado de indexRouter
app.use("/api/v1", indexRouter);

//! un pequeño control de errores para cuando la ruta que estamos solicitando a nuestro servidor no existe. El * significa todas las rutas que no hayan pasado por las rutas de arriba
app.use("*", (req, res, next) => {
    return res.status(404).json("No se ha encontrado esta ruta 🐥")
})

//* Ponemos a nuestro servidor a escuchar en el puerto 3000, nuestro servidor por defecto se levantará en http://localhost:3000, la función listen necesita recibir un puerto y una función, esa función será ejecutada cuando el servidor se levante, en este caso nosotros hemos creado una función para meter dentro un console.log
app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000 🦦");
})