//Importamos mongoose
const mongoose = require("mongoose");

//Creamos el esquema
const CatSchema = new mongoose.Schema(
	{
		name: {type: String, required: true, trim: true},
		age: {type: Number, required: true, trim: true},
		breed: {type: String, required: true, trim: true},
	},
	{
		timestamps: true,
	}
);

//Creamos el modelo de mongoose
const Cat = mongoose.model("Cat", CatSchema);

module.exports = Cat;
