const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./utils/connect");

//Recuperamos el PORT de las variables de entorno
dotenv.config();
const PORT = process.env.PORT;

//Creamos el servidor
const server = express();

//Nos conectamos a la base de datos
connect();

//Configuramos las cors
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//Configurar y parsear la información
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

//Rutas
const VideogamesRouter = require("./api/routes/videogame.routes");
server.use("/api/v1/videogames", VideogamesRouter);
const ConsolesRouter = require("./api/routes/console.routes");
server.use("/api/v1/consoles", ConsolesRouter);
//Vamos a controlar las rutas no encontradas
server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

//Levantamos el servidor
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
