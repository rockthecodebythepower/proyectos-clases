const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "mygallery",
    allowedFormats: ["jpg", "png", "gif", "webp", "jpeg"],
  },
});

const upload = multer({ storage });
module.exports = upload;
