const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

//Creamos el almacén
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "moviesServerAuth",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
  },
});

//Crear la función que sube imagenes al almacén
const upload = multer({ storage });

//Crear la función que borre las imagenes
const deleteImgCloudinary = (imgURL) => {
  const imgSplitted = imgURL.split("/");
  const nameSplitted = imgSplitted[imgSplitted.length - 1].split(".");
  const folderSplitted = imgSplitted[imgSplitted.length - 2];
  const public_id = `${folderSplitted}/${nameSplitted[0]}`;

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Image Deleted");
  });
};

//Configuramos Cloudinary
const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  });
  console.log("Cloudinary ✅");
};

module.exports = {
  upload,
  configCloudinary,
  deleteImgCloudinary,
};
