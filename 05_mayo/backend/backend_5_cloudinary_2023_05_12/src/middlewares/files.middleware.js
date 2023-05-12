const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

//Creamos el almacén de imagenes de Cloudinary
const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "paintings",
		allowedFormats: ["jpg", "jpeg", "png", "webp", "gif"],
	},
});

//Crear la función que sube los ficheros al almacén que hemos creado
const upload = multer({storage});

//Crear la función que elimine las imagenes de Cloudinary
const deleteImg = (imgURL) => {
	//Troceamos la URL
	const imgSplitted = imgURL.split("/");
	//Nos quedamos con un array del nombre y extension
	const nameSplitted = imgSplitted[imgSplitted.length - 1].split(".");
	//Nos quedamos con el nombre de la carpeta del almacén
	const folderSplitted = imgSplitted[imgSplitted.length - 2];
	//Creamos el public id con la carpeta y el nombre
	const public_id = `${folderSplitted}/${nameSplitted[0]}`;
	//Destruimos esa imagen
	cloudinary.uploader.destroy(public_id, () => {
		console.log("Image deleted");
	});
};

//Crear una función que arranque Cloudinary con nuestras credenciales
const configCloudinary = () => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	});
	console.log("Cloudinary ready!");
};

module.exports = {
	upload,
	deleteImg,
	configCloudinary,
};
