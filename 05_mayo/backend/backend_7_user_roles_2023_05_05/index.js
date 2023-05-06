const express = require("express");
require("dotenv").config();
const connect = require("./src/utils/connect");
const {configCloudinary} = require("./src/middlewares/files.middleware");

const PORT = process.env.PORT;

const server = express();
//CONNECT TO DB
connect();
//CONNECT CLOUDINARY
configCloudinary();

//PARSER
server.use(express.json({limit: "5mb"}));
server.use(express.urlencoded({limit: "5mb", extended: false}));

//ROUTES
const UserRouter = require("./src/api/routes/user.routes");
server.use("/api/users", UserRouter);

const BookRouter = require("./src/api/routes/book.routes");
server.use("/api/books", BookRouter);

//ROUTE NOT FOUND
server.use("*", (req, res, next) => {
	const error = new Error("Route not found");
	return next(error);
});

//LISTEN
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});