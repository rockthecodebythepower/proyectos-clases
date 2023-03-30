/* mongoose -> mangosta -> acciones en la bbdd; -> mongoose */
/* express -> servidor */

require("dotenv").config();
const express = require("express");
const { connectDb } = require("./config/db");
const cors = require("cors")
const { setError } = require("./config/error");
const IndexRouter = require("./routes/indexRouter");

const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors())

connectDb();

//! -> mi servidor sepa interpretar los json que le lleguen en el req.body
app.use(express.json());

app.use("/api/v1", IndexRouter);

app.use("*", (req, res, next) => {
  next(setError(404, "Esta ruta no existe"));
});

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Error inesperado");
});

app.listen(PORT, () => {
  console.log("Servidor funcionando en: http://localhost:" + PORT);
});