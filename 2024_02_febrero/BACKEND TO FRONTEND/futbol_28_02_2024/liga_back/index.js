require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const teamsRouter = require("./src/api/routes/team");
const cloudinary = require("cloudinary").v2;
const cors = require("cors")

const app = express();

connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.use(cors())

app.use(express.json());

app.use("/api/v1/teams", teamsRouter);

app.use("*", (req, res, next) => {
  return res
    .status(404)
    .send(
      `<div style="display: flex; justify-content: center; align-items: center; min-height: 100svh"><h1 style="color: red">Route not found</h1></div>`
    );
});

app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000");
});
