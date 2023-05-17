const express = require("express");
const connect = require("./src/utils/connect");
require("dotenv").config();

const PORT = process.env.PORT;

const server = express();
connect();

server.use(express.json({limit: "5mb"}));
server.use(express.urlencoded({limit: "5mb", extended: false}));

const UserRouter = require("./src/api/routes/user.routes");
server.use("/api/users", UserRouter);

server.use("*", (req, res, next) => {
	const error = new Error("Route not found");
	return next(error);
});

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
