require("dotenv").config();
const express = require("express");
/* const mongoose = require("mongoose"); */
const { connectDB } = require("./src/config/db");
const juegosRouter = require("./src/api/routes/juegos");
const plataformasRouter = require("./src/api/routes/plataformas");
const cors = require("cors");
const usersRoutes = require("./src/api/routes/users");

const app = express();

/* mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Conectado con éxito a la bbdd"))
  .catch(() => console.log("Algo ha fallado")); */

// con express.json lo que estamos haciendo es configurar nuestro servidor para que sea capaz de recibir datos en formato json
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/plataformas", plataformasRouter);
app.use("/api/v1/juegos", juegosRouter);
app.use("/api/v1/users", usersRoutes);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000 🤩");
});