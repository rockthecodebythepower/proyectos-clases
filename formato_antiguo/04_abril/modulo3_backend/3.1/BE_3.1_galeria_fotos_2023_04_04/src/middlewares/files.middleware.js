const multer = require("multer")
const cloudinary = require("cloudinary").v2
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const dotenv = require("dotenv")
dotenv.config()

//Creamos el storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "galeria_fotos",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
  },
})

//Creamos la función de subida al storage
const upload = multer({storage})

//Creamos la función que borra las imagenes
const deleteImgCloudinary = (imgUrl) => {
  const imgSplitted = imgUrl.split("/")
  const nameSplitted = imgSplitted[imgSplitted.length - 1].split(".")
  const folderSplitted = imgSplitted[imgSplitted.length - 2]
  const public_id = `${folderSplitted}/${nameSplitted[0]}`

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Image deleted")
  })
}

//Configurar cloudinary con las claves secretas de nuestra cuenta
const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  })
  console.log("Cloudinary running!")
}

module.exports = {upload, deleteImgCloudinary, configCloudinary}
