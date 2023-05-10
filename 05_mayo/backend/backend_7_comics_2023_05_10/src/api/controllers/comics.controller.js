const Comic = require("../models/comics.model");
const {deleteImg} = require("../../middlewares/files.middleware");

const getAllComics = async (req, res, next) => {
	try {
		const comics = await Comic.find();
		return res.status(200).json(comics);
	} catch (error) {
		return next("Comics not found", error);
	}
};

const createComic = async (req, res, next) => {
	try {
		const newComic = new Comic(req.body);
		//Comprobamos si estamos subiendo un fichero
		if (req.file) {
			newComic.cover = req.file.path;
		}

		//Guardar el resultado en la base de datos
		const createdComic = await newComic.save();
		return res.status(201).json(createdComic);
	} catch (error) {
		return next("Error creating comic", error);
	}
};

const deleteComic = async (req, res, next) => {
	try {
		//http://localhost:8080/api/comics/:id <- esto es el param
		const {id} = req.params;
		const deletedComic = await Comic.findByIdAndDelete(id);
		/*
        deletedComic = {
            title: "Algo",
            author: "Algo",
            cover: "http:res.cloudinary/skdnglkasdg/knsdgasd.png"
        }
        */
		//Borramos la imagen de Cloudinary
		deleteImg(deletedComic.cover);
		return res.status(200).json("Comic deleted!");
	} catch (error) {
		return next(error);
	}
};

const updateComic = async (req, res, next) => {
	try {
		//Recuperamos el id de los params
		const {id} = req.params;
		//Creamos un nuevo comic
		const newComic = new Comic(req.body);
		//Conservamos el id original porque si no Mongo lo actualiza y me lo cambia
		newComic._id = id;
		//Buscamos el comic original
		const originalComic = await Comic.findById(id);
		//Si le pasamos un fichero
		if (req.file) {
			//Borramos la imagen original de cloudinary
			deleteImg(originalComic.cover);
			//Subimos la nueva
			newComic.cover = req.file.path;
		}
		//Como ya tenemos el comic completo, atacamos al comic de su id y lo actualizamos
		await Comic.findByIdAndUpdate(id, newComic);
		return res.status(200).json("Comic updated!");
	} catch (error) {
		return next("Error updating comic", error);
	}
};

module.exports = {
	createComic,
	getAllComics,
	updateComic,
	deleteComic,
};
