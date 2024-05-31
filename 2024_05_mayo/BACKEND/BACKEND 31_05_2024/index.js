require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const mainRouter = require("./src/api/routes/main");
const cors = require("cors");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1", mainRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Not Found");
});

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
});