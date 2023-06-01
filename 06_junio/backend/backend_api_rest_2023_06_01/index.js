//Importamos express
const express = require("express");
//Importamos dotenv
const dotenv = require("dotenv");
//Para que funcione dotenv tenemos que configurarlo
dotenv.config();
//Importamos la función connect
const connect = require("./src/utils/connect");

//Almacenamos en una variable la variable de entorno PORT
const PORT = process.env.PORT;

//Creamos el servidor express
const server = express();

//Nos conectamos con la base de datos
connect();

//Configuramos server para que pueda leer tanto json como urls
server.use(express.json());
server.use(express.urlencoded({extended: false}));

//Importamos las rutas y las implementamos
const CatRouter = require("./src/api/routes/cat.routes");
server.use("/api/cats", CatRouter);

//Levantar el servidor
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
