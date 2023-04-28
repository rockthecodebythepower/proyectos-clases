const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

//Creamos el almacen de fotos en Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "movies-cloudinary",
    allowedFormats: ["jpg", "png", "jpeg", "webp", "gif"],
  },
});

//Función que sube imagenes al almacen
const upload = multer({ storage });

//Función que borra imagenes del almacen
const deleteImg = (imgURL) => {
  const imgSplitted = imgURL.split("/");
  const nameSplitted = imgSplitted[imgSplitted.length - 1].split(".");
  const folderSplitted = imgSplitted[imgSplitted.length - 2];
  const public_id = `${folderSplitted}/${nameSplitted[0]}`;
  cloudinary.uploader.destroy(public_id, () => {
    console.log("Image deleted");
  });
};

//Función que arranca cloudinary con nuestras credenciales
const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  });
  console.log("Cloudinary running!");
};

module.exports = {
  upload,
  configCloudinary,
  deleteImg,
};
