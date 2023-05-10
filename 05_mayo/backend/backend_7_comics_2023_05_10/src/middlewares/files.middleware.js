const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

//Creamos el almacén de imagenes en Cloudinary
const storage = new CloudinaryStorage({
	//La versión de cloudinary
	cloudinary: cloudinary,
	//Parámetros de nuestro almacen
	params: {
		folder: "comicsdb",
		allowedFormats: ["jpg", "jpeg", "png", "webp", "gif"],
	},
});

//Creamos una función que nos subirá los ficheros al almacén
const upload = multer({storage});

//Creamos una función que borre las imagenes de Cloudinary
const deleteImg = (imgURL) => {
	//Dividir la URL teniendo como referencia las /
	const imgSplitted = imgURL.split("/");
	//Nos quedamos con el nombre del fichero con su extension
	const nameSplitted = imgSplitted[imgSplitted.length - 1].split(".");
	//Nos quedamos con el nombre de la carpeta
	const folderSplitted = imgSplitted[imgSplitted.length - 2];
	//Creamos un public id con el nombre de la carpeta y el nombre del fichero sin su extensión
	const public_id = `${folderSplitted}/${nameSplitted[0]}`;
	cloudinary.uploader.destroy(public_id);
};

//Creamos una función para conectar nuestro Cloudinary
const configCloudinary = () => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		api_secret: process.env.CLOUDINARY_API_SECRET,
		api_key: process.env.CLOUDINARY_API_KEY,
	});
	console.log("Cloudinary connected");
};

module.exports = {upload, deleteImg, configCloudinary};
