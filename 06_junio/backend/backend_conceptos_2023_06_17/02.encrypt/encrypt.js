const fs = require("fs");
const crypto = require("crypto-js");
const dotenv = require("dotenv");
const { enc } = require("crypto-js/core");

//Arrancamos dotenv para poder leer las variables de entorno:
dotenv.config();
//Recuperamos nuestra clave secreta
const SECRET_KEY = process.env.SECRET_KEY;

//Vamos a crear una función a la cual le vamos a pasar un texto y una clave secreta y nos va a encriptar el texto en el formato AES y lo devolverá en string

const encrypt = (text, key) => {
  //Utilizamos el metodo AES de la librería para encriptar el texto con este metodo
  const encryptedText = crypto.AES.encrypt(text, key);
  return encryptedText.toString();
};

//Vamos a leer un fichero de texto con codificacion utf-8
fs.readFile("documento.txt", "utf-8", (error, data) => {
  if (error) {
    //Si hay un error nos salimos de la función
    throw error;
  }
  const encryptedData = encrypt(data, SECRET_KEY);
  //Con la información encriptada vamos a crear un fichero nuevo
  fs.writeFile("documento-enc.txt", encryptedData, () => {
    console.log("Documento encriptado creado!");
  });
});
