require("dotenv").config()
const express = require("express");
const cors = require("cors");
const entradasRoutes = require("./src/entradas.routes");
const { connectDb } = require("./config/db");

const app = express();
connectDb();

app.use(cors());

app.use("/entradas", entradasRoutes);

app.listen(3000, () => {
    console.log("servidor levantado en: http://localhost:3000/");
})