const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "stardewValley",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"]
  },
});

const upload = multer({ storage });
module.exports = { upload };