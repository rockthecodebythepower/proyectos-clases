const express = require("express");
const cors = require("cors");
const pinturas = require("./datos");

const server = express();

server.use(cors());

const saludoDelServer = () => {
  console.log("Servidor funcionando a toda máquina en: http://localhost:3000");
};


server.use("/pinturas/:id", (req, res, next) => {

    const { id } = req.params;

    let respuesta = pinturas[id - 1];

    if (!respuesta) {
        respuesta = pinturas[0]
    }

    return res.status(200).json(respuesta);

})

server.use("/pinturas", (req, res, next) => {

    return res.status(200).json(pinturas);

})

server.use("/api/v1", (req, res, next) => {
    return res.status(200).json("Todo funciona pepino 🥒");
})

server.use("*", (req, res, next) => {
  return res.status(404).json("Ruta no encontrada ☃");
});

server.listen(3000, saludoDelServer);