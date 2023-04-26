//Importamos fs
const fs = require("fs")

//Leemos la imagen
const image = fs.readFileSync("imagen.png")

//Convertimos esta imagen en un string con formato base64
const base64Image = image.toString("base64")

//Escribir un fichero con el resultado
fs.writeFileSync("imagenBase64.txt", base64Image)
