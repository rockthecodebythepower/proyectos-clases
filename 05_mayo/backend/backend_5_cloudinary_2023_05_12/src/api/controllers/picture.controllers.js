const Picture = require("../models/picture.model");
const {deleteImg} = require("../../middlewares/files.middleware");

const getAllPictures = async (req, res, next) => {
	try {
		const pictures = await Picture.find();
		return res.status(200).json(pictures);
	} catch (error) {
		return next("Pictures not found", error);
	}
};

const createPicture = async (req, res, next) => {
	try {
		const newPicture = new Picture(req.body);
		//Si en la petición te estoy enviando un fichero
		if (req.file) {
			newPicture.image = req.file.path;
		} else {
			newPicture.image = "No image";
		}

		const createdPicture = await newPicture.save();
		return res.status(201).json(createdPicture);
	} catch (error) {
		return next("Error creating Picture", error);
	}
};

const deletePicture = async (req, res, next) => {
	try {
		//Recuperamos el param id para saber que picture vamos a eliminar
		//Con un delete -> http://localhost:8080/api/pictures/:id
		const {id} = req.params;
		const deletedPicture = await Picture.findByIdAndDelete(id);
		//Sabiendo el objeto que he borrado, borramos la imagen en Cloudinary
		deleteImg(deletedPicture.image);
		return res.status(200).json("Picture deleted!");
	} catch (error) {}
};

module.exports = {
	getAllPictures,
	createPicture,
	deletePicture,
};
