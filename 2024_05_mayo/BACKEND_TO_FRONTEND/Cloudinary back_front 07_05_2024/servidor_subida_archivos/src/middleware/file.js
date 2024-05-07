const cloudinary = require("cloudinary").v2;
const multer = require("multer"); // la librería que realmente me está permitiendo interpretar archivos en mi servidor.
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "PruebaCloudinary",
    allowedFormats: ["jpeg", "jpg", "png", "gif", "webp", "avif"],
  },
});

const upload = multer({ storage });
module.exports = upload;