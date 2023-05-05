const express = require("express");
const {upload} = require("../../middlewares/files.middleware");
const {
	getAllBooks,
	createBook,
	deleteBook,
	updateBook,
} = require("../controllers/book.controllers");
const isAuth = require("../../middlewares/auth.middleware");

//Creamos el Router
const BookRouter = express.Router();
//Definimos los métodos
BookRouter.get("/", getAllBooks);
//Adicionalmente vamos a proteger la ruta del post con isAuth
BookRouter.post("/", [isAuth], upload.single("cover"), createBook);
BookRouter.delete("/:id", deleteBook);
BookRouter.patch("/:id", upload.single("cover"), updateBook);

module.exports = BookRouter;
