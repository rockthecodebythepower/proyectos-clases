const express = require("express");
const dotenv = require("dotenv").config();
const connect = require("./src/utils/connect");

const PORT = process.env.PORT;

const server = express();
connect();

server.use(express.json());
server.use(express.urlencoded({extended: false}));

const FactionRouter = require("./src/api/routes/faction.routes");
server.use("/api/v1/factions", FactionRouter);
const TransformerRouter = require("./src/api/routes/transformer.routes");
server.use("/api/v1/transformers", TransformerRouter);

server.use("*", (req, res, next) => {
	const error = new Error("Route not found");
	return next(error);
});

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT} `);
});
