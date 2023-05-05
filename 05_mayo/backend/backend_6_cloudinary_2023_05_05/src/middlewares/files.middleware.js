const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

//Creamos el almacén de imagenes en Cloudinary
const storage = new CloudinaryStorage({
	//Indicamos la versión de cloudinary
	cloudinary: cloudinary,
	//Los parámetros de nuestro almacén
	params: {
		folder: "booksdb",
		allowFormats: ["jpg", "png", "jpeg", "webp", "gif"],
	},
});

//Creamos una función que nos sube las imágenes al almacén que hemos creado
//Multer se encargará de subir los ficheros a storage
const upload = multer({storage});

//Creamos una función que elimina las imágenes del almacén
const deleteImgCloudinary = (imgURL) => {
	//Dividimos la URL de la imagen teniendo como ref las /
	const imgSplitted = imgURL.split("/");
	//Nos quedamos con el nombre del fichero
	const nameSplitted = imgSplitted[imgSplitted.length - 1].split(".");
	//Nos quedamos con nombre de la carpeta
	const folderSplitted = imgSplitted[imgSplitted.length - 2];
	//Creamos un public_id para poder borrarlo
	const public_id = `${folderSplitted}/${nameSplitted[0]}`;

	cloudinary.uploader.destroy(public_id, () => {
		console.log("Image destroyed!");
	});
};

//Creamos la función que configura Cloudinary con nuestras claves de acceso
const configCloudinary = () => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		api_secret: process.env.CLOUDINARY_API_SECRET,
		api_key: process.env.CLOUDINARY_API_KEY,
	});
	console.log("Cloudinary ready!");
};

module.exports = {upload, configCloudinary, deleteImgCloudinary};
