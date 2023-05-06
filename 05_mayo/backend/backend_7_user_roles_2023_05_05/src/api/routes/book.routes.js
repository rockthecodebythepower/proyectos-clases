const express = require("express");
const {upload} = require("../../middlewares/files.middleware");
const {
	getAllBooks,
	createBook,
	deleteBook,
	updateBook,
} = require("../controllers/book.controllers");
const { isAdmin } = require("../../middlewares/auth.middleware");

//Creamos el Router
const BookRouter = express.Router();
//Definimos los métodos
BookRouter.get("/", getAllBooks);
//Adicionalmente vamos a proteger la ruta del post con isAuth
BookRouter.post("/", [isAdmin], upload.single("cover"), createBook);
BookRouter.delete("/:id", [isAdmin], deleteBook);
BookRouter.patch("/:id", [isAdmin], upload.single("cover"), updateBook);

module.exports = BookRouter;
