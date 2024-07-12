require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const userRoutes = require("./src/api/routes/user");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.listen(3000, () => {
    console.log("http://localhost:3000");
})