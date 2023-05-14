const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const storage = new CloudinaryStorage({
    cloudinary: cloudinary, 
    params: {
        folder: "Records",
        allowedFormats: ["m4a", "mp3", "ogg", "png", "jpg", "mp4"]
    }
})

const upload = multer({storage});

module.exports = upload;