const express = require("express");
const { connectDB } = require("./src/config/db");
const { setError } = require("./src/config/error");
const indexRouter = require("./src/routes");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const app = express();
connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

app.use(express.json());

app.use("/api/v1", indexRouter);

app.use("*", (req, res, next) => {
    next(setError(404, "Route not found"))
});
 
app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || "Unexpected error")
})

app.listen(process.env.PORT, () => {

    console.log("Forum running in: http://localhost:" + process.env.PORT);

})