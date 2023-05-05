const express = require("express");
const dotenv = require("dotenv");
const connect = require("./src/utils/connect");
dotenv.config();

const PORT = process.env.PORT;

const server = express();
//CONNECT TO DB
connect();

//PARSER
server.use(express.json({limit: "5mb"}));
server.use(express.urlencoded({limit: "5mb", extended: false}));

//ROUTES
const UserRouter = require("./src/api/routes/user.routes");
server.use("/api/users", UserRouter);

//ROUTE NOT FOUND
server.use("*", (req, res, next) => {
	const error = new Error("Route not found");
	return next(error);
});

//LISTEN
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
