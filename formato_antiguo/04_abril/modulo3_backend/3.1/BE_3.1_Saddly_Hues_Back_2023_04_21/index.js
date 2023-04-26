require("dotenv").config();
const express = require("express");
const cors = require("cors");
const indexRoutes = require("./src/routes");
const { connectDB } = require("./src/config/db");

const app = express();
connectDB();

app.use(cors());

app.use("/", indexRoutes);

app.listen(3000, () => {
    console.log("Servidor funcionando en: http://localhost:3000");
})