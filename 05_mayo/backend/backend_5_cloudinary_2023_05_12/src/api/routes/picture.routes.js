const express = require("express");
const {upload} = require("../../middlewares/files.middleware");
const {
	getAllPictures,
	createPicture,
	deletePicture,
} = require("../controllers/picture.controllers");

//Creamos el router
const PictureRouter = express.Router();
//Definir los verbos
PictureRouter.get("/", getAllPictures);
PictureRouter.post("/", upload.single("image"), createPicture);
PictureRouter.delete("/:id", deletePicture);

module.exports = PictureRouter;
