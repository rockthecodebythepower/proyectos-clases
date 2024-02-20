require("dotenv").config();
const iasRouter = require("./src/api/routes/ias");
const { connectDB } = require("./src/config/db");
const express = require("express");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/v1/ias", iasRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route Not Found");
});

app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000");
});
