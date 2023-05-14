require("dotenv").config();
const express = require("express");
const indexRouter = require("./src/api/routes/indexRouter");
const { connectDB } = require("./src/utils/db");
const cloudinary = require("cloudinary").v2;
const cors = require("cors")

const app = express();
connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

app.use(cors());

app.use(express.json());

app.use("/api/v1", indexRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Ruta no encontrada 😴");
})

app.listen(3000, () => {
    console.log("Servidor levantado 👻 en: http://localhost:3000");
})