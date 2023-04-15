//Importamos la librería fs para poder leer y escribir ficheros
const fs = require("fs")
//Importamos crypto-js para poder encriptar el fichero
const crypto = require("crypto-js")
//Vamos a importar dotenv y configurarlo para poder leer el fichero .env
const dotenv = require("dotenv")
dotenv.config()

//Almacenar la clave secreta
const secretKey = process.env.SECRET_KEY

//Vamos a declarar la función que ecripta el texto de nuestro documento
const encrypt = (text, key) => {
  //Encriptamos el texto pasado por argumento mediante la clave
  const encryptedText = crypto.AES.encrypt(text, key)
  //Retornamos el texto encriptado en string
  return encryptedText.toString()
}

//Leemos un fichero
fs.readFile("documento.txt", "utf-8", (err, data) => {
  //Vamos a utilizar la función fs.readFile para leer un fichero, le pasamos por parametro la ruta del archivo y su codificación
  if (err) {
    throw err
  }
  //Si hay algún error lo devolvemos
  const encryptedText = encrypt(data, secretKey)
  //Si todo hay ido bien almacenaremos el retorno de la función encrypt en una constante encryptedText, a la cual le pasaremos los datos de la lectura de fichero y la clave secreta
  fs.writeFile("documento-enc.txt", encryptedText, (err) => {
    //Ahora que tenemos el texto encriptado, generamos un nuevo fichero con ello
    if (err) {
      throw err
    }
    //Si hay algún error lo devolvemos
    console.log("El fichero se ha encriptado correctamente!")
    //Si todo va bien mostramos un mensaje de éxito
  })
})
