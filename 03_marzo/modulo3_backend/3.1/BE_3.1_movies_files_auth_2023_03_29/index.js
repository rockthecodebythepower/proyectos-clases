const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./src/utils/connect");
const { configCloudinary } = require("./src/middlewares/files.middleware");

dotenv.config();

const PORT = process.env.PORT;

const server = express();

//CONNECT
connect();

//CLOUDINARY CONNECT
configCloudinary();

//CORS
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
//PARSER
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

//ROUTES
const MoviesRouter = require("./src/api/routes/movie.routes");
server.use("/api/v1/movies", MoviesRouter);

const UserRouter = require("./src/api/routes/user.routes");
server.use("/api/v1/users", UserRouter);
//Route not found
server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  return next(error);
});

//LISTEN
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
