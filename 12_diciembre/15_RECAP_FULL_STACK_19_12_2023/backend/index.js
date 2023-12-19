const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connect = require("./src/config/db")
const AlbumRouter = require("./src/api/routes/album.routes")

const server = express();
server.use(cors());
server.use(express.json());

connect()

server.use("/api/v1/albums", AlbumRouter)

server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080")
})