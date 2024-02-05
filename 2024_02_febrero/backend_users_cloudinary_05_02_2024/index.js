require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/config/db");
const userRouter = require("./src/api/routes/users");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);

app.use("*", (req, res) => {
  return res.status(404).json("Route not found");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
