require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const cors = require("cors");
const mainRouter = require("./src/api/routes/main");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/v1", mainRouter);

app.listen(3000, () => {
    console.log("Servidor escuchando en: http://localhost:3000");
})