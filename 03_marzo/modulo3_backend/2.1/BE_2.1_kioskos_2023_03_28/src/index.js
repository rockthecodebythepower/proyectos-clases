/* mongoose -> mangosta -> acciones en la bbdd; -> mongoose */
/* express -> servidor */

require("dotenv").config();
const express = require("express");
const { connectDb } = require("./config/db");
const IndexRouter = require("./routes/indexRouter");

const PORT = process.env.PORT || 4001;

const app = express();

connectDb();

app.use(express.json());

app.use("/api/v1", IndexRouter);

app.use("*", (req, res) => {
    return res.status(404).json("esta ruta no existe");
})

app.listen(PORT, () => {
  console.log("Servidor funcionando en: http://localhost:" + PORT);
});