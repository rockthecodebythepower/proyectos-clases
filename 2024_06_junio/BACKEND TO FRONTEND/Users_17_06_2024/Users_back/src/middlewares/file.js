const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Users",
        allowedFormats: ["jpg", "jpeg", "png", "webp", "avif", "gif"]
    }
});

const upload = multer({ storage });
module.exports = upload;