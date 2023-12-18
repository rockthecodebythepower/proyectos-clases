const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connect = require("./src/config/db");
const cloudinary = require("cloudinary").v2;
const ImageRouter = require("./src/api/routes/image.routes");

const server = express();

connect();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

server.use(cors());
server.use(express.json());

server.use("/api/v1/images", ImageRouter);

server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
