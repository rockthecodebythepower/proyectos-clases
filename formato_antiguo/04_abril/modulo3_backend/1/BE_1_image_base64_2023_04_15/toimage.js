//Importamos fs
const fs = require("fs")

//Leemos el fichero
const base64Image = fs.readFileSync("imagenBase64.txt", "utf-8")

//Cargar todo el texto a la vez en el buffer
const bufferImage = Buffer.from(base64Image, "base64")

//Escribimos un fichero con formato imagen
fs.writeFileSync("imagenNormal.png", bufferImage)
