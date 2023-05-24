require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const userRouter = require("./src/api/routes/user");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());

//! esta línea me sirve para que mi servidor pueda interpretar los json que le llegan de las peticiones
app.use(express.json());

app.use("/api/v1", userRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found 🙄");
})

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});