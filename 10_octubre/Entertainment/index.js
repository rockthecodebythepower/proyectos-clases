require("dotenv").config();

/* para crear un servidor necesitaremos express */
const express = require("express");
const cors = require("cors");

const { connectDB } = require("./src/config/db");
const entertainmentsRouter = require("./src/api/routes/entertainment");

/* necesitamos ejecutar express y volcar lo que devuelve la función dentro de una variable para así utilizar todos los métodos del servidor */
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/entertainments", entertainmentsRouter);


app.listen(3000, () => {
    console.log("Servidor funcionado en http://localhost:3000");
})