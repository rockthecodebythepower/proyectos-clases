require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const tortugasRouter = require("./src/api/routes/tortuga");
const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("/api/v1/tortugas", tortugasRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});