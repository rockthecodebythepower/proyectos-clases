//Importamos mongoose para conectarnos con Mongo
const mongoose = require("mongoose");
//Utilizamos dotenv y lo configuramos
const dotenv = require("dotenv");
dotenv.config();

//Almacenamos la variable de entorno MONGO_URI
const MONGO_URI = process.env.MONGO_URI;

//Creamos la función connect
const connect = async () => {
	await mongoose.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log("Database connected!");
};

//Exportamos la función connect
module.exports = connect;
