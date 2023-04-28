const express = require("express");
const dotenv = require("dotenv");
const connect = require("./src/utils/connect");
const { configCloudinary } = require("./src/middlewares/files.middleware");
dotenv.config();

const PORT = process.env.PORT;

const server = express();
connect();
configCloudinary();

//PARSER
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

//ROUTES
const MoviesRouter = require("./src/api/routes/movies.routes");
server.use("/api/movies", MoviesRouter);

//ROUTE NOT FOUND
server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  return next(error);
});

//LISTEN
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
