require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const cors = require("cors");
const { configCloudinary } = require("./src/config/cloudinary");
const upload = require("./src/middleware/file");
const Imagen = require("./src/api/models/imagen");

const app = express();

connectDB();
configCloudinary();
app.use(cors()); 
// permitir que desde un front con un puerto o url diferentes se realicen peticiones a mi servidor
app.use(express.json()); // permitir que lleguen a mi servidor datos en formato json

app.get("/api/v1", (req, res, next) => {
  return res.status(200).json("🤗");
});

app.post("/api/v1", upload.single("img"), async (req, res, next) => {
  try {

    const img = new Imagen({
      title: req.body.title,
      img: req.file?.path,
    });

    await img.save();

    return res.status(200).json(img);

  } catch (error) {
    return res.status(200).json("Error");
  }
});

app.use("*", (req, res, next) => {
  return res.status(404).json("Route Not Found");
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
