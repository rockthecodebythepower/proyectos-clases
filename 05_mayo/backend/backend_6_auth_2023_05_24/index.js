const express = require("express");
require("dotenv").config();
const connect = require("./src/utils/connect");

const PORT = process.env.PORT;

const server = express();
connect();

server.use(express.json());
server.use(express.urlencoded({extended: false}));

const UserRouter = require("./src/api/routes/user.routes");
server.use("/api/users", UserRouter);

server.use("*", (req, res, next) => {
	const error = new Error("Route not found");
	return next(error);
});

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
