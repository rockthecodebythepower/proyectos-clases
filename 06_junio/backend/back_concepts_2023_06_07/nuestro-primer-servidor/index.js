//? la importación de express a mi archivo para poder utilizarlo en el futuro
const express = require("express");
const indexRouter = require("./src/api/routes/indexRouter");
const cors = require("cors");

//! ejecuto express y lo guardo en la variable server, para poder acceder a todos sus métodos como el .use, el .listen
const server = express();

server.use(cors());
server.use(express.json());

server.use("/", indexRouter);

//* utilizar el método listen en puerto que le indiquemos y levantar la función que le estemos pasando.
server.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000");
});