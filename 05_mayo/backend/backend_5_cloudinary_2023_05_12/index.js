const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/utils/connect");
const {configCloudinary} = require("./src/middlewares/files.middleware");

const PORT = process.env.PORT;

//Nos conectamos con Cloudinary
configCloudinary();
//Creamos el servidor
const server = express();
//Nos conectamos con la base de datos
connect();

//Parseamos la información
server.use(express.json({limit: "5mb"}));
server.use(express.urlencoded({limit: "5mb", extended: false}));

//Routes
const PictureRouter = require("./src/api/routes/picture.routes");
server.use("/api/pictures", PictureRouter);
//Route not found
server.use("*", (req, res, next) => {
	const error = new Error("Route not found");
	return next(error);
});

//Listen
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
