require("dotenv").config();
const gamesRouter = require("./src/api/routes/game");
const { connectDB } = require("./src/config/db");
const express = require("express");
const cors = require("cors")

const app = express();
connectDB();

app.use(cors());

app.use("/api/v1/games", gamesRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})