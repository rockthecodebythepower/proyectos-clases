require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const villagerRoutes = require("./src/api/routes/villager");
const houseRoutes = require("./src/api/routes/house");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

connectDB();

app.use("/api/v1/houses", houseRoutes);
app.use("/api/v1/villagers", villagerRoutes);

app.use("*", (req, res, next) => {
    res.status(404).json("Ruta no encontrada")
})

app.listen(3000, () => {
    console.log("Estoy levantado en http://localhost:3000");
})