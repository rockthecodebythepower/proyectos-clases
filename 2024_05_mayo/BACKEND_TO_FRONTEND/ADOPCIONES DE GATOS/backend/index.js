require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/api/routes/mainRouter");
const { connectDB } = require("./src/config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/v1", router);

app.listen(3000, () => {
    console.log("http://localhost:3000");
})