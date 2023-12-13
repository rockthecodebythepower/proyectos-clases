require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const librosRouter = require("./src/api/routes/libro");
const usersRouter = require("./src/api/routes/user");

const app = express();

connectDB();

//! línea para poder interpretar formatos json
app.use(express.json());

app.use("/api/v1/libros", librosRouter);
app.use("/api/v1/users", usersRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Route Not Found");
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})