require("dotenv").config();
const fs = require("fs");
const crypto = require("crypto-js");

const key = process.env.PALABRA_SECRETA;

function encrypt(data, key) {

    const encrypted = crypto.AES.encrypt(data, key);
    return encrypted.toString();

}


fs.readFile("mensaje.txt", "utf-8", (err, data) => {

    if (err) return err;

    const encryptedData = encrypt(data, key);

    fs.writeFile("mensaje-encriptado.txt", encryptedData, (err) => {
        if (err) return err;
        console.log("Se ha encriptado el archivo");
    });

})
