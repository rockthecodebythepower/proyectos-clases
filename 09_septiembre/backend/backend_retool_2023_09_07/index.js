require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/config/db");
const userRoutes = require("./src/api/routes/user");
const { isAuth } = require("./src/middleware/auth");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/privado", [isAuth], async (req, res, next) => {
    return res.status(200).json("esto es privado sólo lo pueden ver personas loguedas en la aplicación")
})

app.use("/api/v1/users", userRoutes);

app.listen(3000, () => {
    console.log("conectado en http://localhost:3000");
});