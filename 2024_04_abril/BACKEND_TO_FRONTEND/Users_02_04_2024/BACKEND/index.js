require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const usersRouter = require("./src/api/routes/users");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", usersRouter);

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
})