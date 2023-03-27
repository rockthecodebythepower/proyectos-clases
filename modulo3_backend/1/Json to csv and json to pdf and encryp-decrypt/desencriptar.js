require("dotenv").config();
const fs = require("fs");
const crypto = require("crypto-js");

const key = process.env.PALABRA_SECRETA;

const decrypt = (data, key) => {

    const decrypted = crypto.AES.decrypt(data, key);
    return decrypted.toString(crypto.enc.Utf8);

}

fs.readFile("mensaje-encriptado.txt", "utf-8", (err, data) => {

    if (err) return err;

    const desencryptedData = decrypt(data, key);

    fs.writeFile("mensaje-desencriptado.txt", desencryptedData, (err) => {

        if (err) return err;

        console.log("lo has hecho muy bien")

    })

})