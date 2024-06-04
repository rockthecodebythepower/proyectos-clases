require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const cors = require("cors");
const workerRouter = require("./src/api/routes/worker");
const workRouter = require("./src/api/routes/work");
const registerRouter = require("./src/api/routes/register");
const app = express();
const cron = require("node-cron");
const Worker = require("./src/api/models/worker");

cron.schedule("0 0 * * *", async () => {
  const workers = await Worker.find();
  for (const worker of workers) {
    await Worker.findByIdAndUpdate(worker._id, { hoursPerDay: 0 });
  }
  console.log("Todas las horas actualizadas");
});

app.use(express.json());
app.use(cors());

app.use("/api/v1/worker", workerRouter);
app.use("/api/v1/work", workRouter);
app.use("/api/v1/register", registerRouter);

connectDB();

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
