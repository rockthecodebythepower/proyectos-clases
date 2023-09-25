require("dotenv").config();
const express = require("express");
const cloudinary = require("cloudinary").v2;
const { connectDB } = require("./src/config/BBDD/db");
const userRoutes = require("./src/api/routes/user");
const cors = require("cors");

const app = express();

connectDB();

cloudinary.config(
    {
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    }
)

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.use("*", (req, res, next) => {
    return res.status(404).json("Ruta no encontrada");
})

app.listen(3000, () => {
    console.log("estoy levantado aquí: http://localhost:3000");
});