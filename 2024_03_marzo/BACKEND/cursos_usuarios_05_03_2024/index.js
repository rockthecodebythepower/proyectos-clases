require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const subjectRouter = require("./src/api/routes/subjects");
const courseRouter = require("./src/api/routes/courses");
const cors = require("cors");
const userRouter = require("./src/api/routes/user");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/users", userRouter);

app.listen(3000, () => {
    console.log("Servidor levantado en: http://localhost:3000");
})