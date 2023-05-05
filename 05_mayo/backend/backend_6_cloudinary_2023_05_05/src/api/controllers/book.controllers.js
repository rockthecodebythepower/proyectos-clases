const Book = require("../models/book.model");
const {deleteImgCloudinary} = require("../../middlewares/files.middleware");

const getAllBooks = async (req, res, next) => {
	try {
		const books = await Book.find();
		return res.status(200).json(books);
	} catch (error) {
		return next("Books not found", error);
	}
};

const createBook = async (req, res, next) => {
	try {
		const newBook = new Book(req.body);
		//Comprobamos si le estamos pasando un fichero por la petición
		if (req.file) {
			//El path es la ruta del fichero en nuestro equipo
			newBook.cover = req.file.path;
		}
		//Almacenamos el resultado del guardado en la base de datos
		const createdBook = await newBook.save();
		return res.status(201).json(createdBook);
	} catch (error) {
		return next("Error creating book", error);
	}
};

const deleteBook = async (req, res, next) => {
	try {
		//http://localhost:8080/api/books/:id <- este es el param
		const {id} = req.params;
		//Almacenamos el libro que va a ser borrada
		const deletedBook = await Book.findByIdAndDelete(id);
		//Como hemos almacenado el libro, se la URL de la propiedad cover que quiero borrar
		/*
        book: {
            title: "Noseque",
            author: "Nosequien",
            cover: http:cloudinary.imagen.jpg
        }
        */
		deleteImgCloudinary(deletedBook.cover);
		return res.status(200).json("Book deleted");
	} catch (error) {
		return next("Error deleting book", error);
	}
};

const updateBook = async (req, res, next) => {
	try {
		//Recuperamos el id de los params
		const {id} = req.params;
		//Creamos un nuevo libro
		const newBook = new Book(req.body);
		//Al editar un modelo de Mongo, el id se sobreescribe, asi que lo vamos a mantener
		newBook._id = id;
		//Vamos a buscar el libro original
		const originalBook = await Book.findById(id);
		//Si le pasamos un archivo...
		if (req.file) {
			//Destruimos la imagen original
			deleteImgCloudinary(originalBook.cover);
			//Le metemos una imagen nueva
			newBook.cover = req.file.path;
		}
		//Ahora que tenemos el libro preparado sustituimos con el id el libro original
		await Book.findByIdAndUpdate(id, newBook);
		return res.status(200).json("Book updated!");
	} catch (error) {
		return next("Error updating book!", error);
	}
};

module.exports = {getAllBooks, createBook, deleteBook, updateBook};
