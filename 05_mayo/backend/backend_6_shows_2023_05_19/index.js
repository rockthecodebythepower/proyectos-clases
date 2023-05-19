const express = require("express");
const connect = require("./src/utils/connect");
require("dotenv").config();

const PORT = process.env.PORT;

const server = express();
connect();

//Parseamos la información
server.use(express.json({limit: "5mb"}));
server.use(express.urlencoded({limit: "5mb", extended: false}));

//Routes
const ActorRouter = require("./src/api/routes/actor.routes");
server.use("/api/actors", ActorRouter);

const ShowRouter = require("./src/api/routes/show.routes");
server.use("/api/shows", ShowRouter);

//Route not found
server.use("*", (req, res, next) => {
	const error = new Error("Route not found");
	return next(error);
});

//Listen
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
