require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const { connectCloudinary } = require("./src/config/cloudinary");
const cors = require("cors");
const userRoutes = require("./src/api/routes/user");

const app = express();
app.use(express.json());
app.use(cors());

connectCloudinary();
connectDB();

app.use("/api/v1/users", userRoutes);

app.listen(3000, () => {
    console.log("http://localhost:3000")
})