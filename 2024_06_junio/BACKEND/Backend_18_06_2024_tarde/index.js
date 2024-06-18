require("dotenv").config();
const express = require("express");
const { connectDb } = require("./src/config/db");
const marvelRouter = require("./src/api/routes/marvel");
const app = express();
const port = 3000;

connectDb();

app.use(express.json()); // esta línea me permite configurar que mi servidor sea capaz de entender un cuerpo de una petición en formato json

app.use("/api/v1/marvel", marvelRouter);

app.use("/", (req, res, next) => {
    return res.status(200).json("hola mundo");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);   
});