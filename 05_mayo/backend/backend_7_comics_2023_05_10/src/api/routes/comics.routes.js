const express = require("express");
const {upload} = require("../../middlewares/files.middleware");
const {
	createComic,
	getAllComics,
	updateComic,
	deleteComic,
} = require("../controllers/comics.controller");

//Creamos el Router
const ComicRouter = express.Router();
//Definimos los métodos
ComicRouter.get("/", getAllComics);
ComicRouter.post("/", upload.single("cover"), createComic);
ComicRouter.delete("/:id", deleteComic);
ComicRouter.patch("/:id", upload.single("cover"), updateComic);

module.exports = ComicRouter;
