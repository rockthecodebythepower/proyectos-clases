require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const usersRoutes = require("./src/api/routes/user");

const app = express();

connectDB();

//! configurando mi servidor para que sea capaz de interpretar formatos json que le envío
app.use(express.json());

app.use("/api/v1/users", usersRoutes);

app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
});

app.listen(3000, () => {
    console.log("El servidor está funcionando en: http://localhost:3000");
});