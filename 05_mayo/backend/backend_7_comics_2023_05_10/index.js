const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/utils/connect");
const {configCloudinary} = require("./src/middlewares/files.middleware");

const PORT = process.env.PORT;

const server = express();
connect();
configCloudinary();

//Parsear la información
server.use(express.json({limit: "5mb"}));
server.use(express.urlencoded({limit: "5mb", extended: false}));

//Routes
const ComicRouter = require("./src/api/routes/comics.routes");
server.use("/api/comics", ComicRouter);

//Route not found
server.use("*", (req, res, next) => {
	const error = new Error("Route not found");
	return next(error);
});

//Listen
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
