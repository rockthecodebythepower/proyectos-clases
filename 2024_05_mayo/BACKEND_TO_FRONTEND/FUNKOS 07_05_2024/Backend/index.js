require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const funkosRouter = require("./src/api/routes/funkos");
const cors = require("cors");
const usersRouter = require("./src/api/routes/users");

const app = express();
app.use(cors());
app.use(express.json()); //! me permite recibir datos en formato json

connectDB();

app.use("/funkos", funkosRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});
