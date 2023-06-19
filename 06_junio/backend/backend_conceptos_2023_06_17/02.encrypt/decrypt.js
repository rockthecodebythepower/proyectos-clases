const fs = require("fs");
const crypto = require("crypto-js");
const dotenv = require("dotenv");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const decrypt = (text, key) => {
  const decrypted = crypto.AES.decrypt(text, key);
  return decrypted.toString(crypto.enc.Utf8);
};

fs.readFile("documento-enc.txt", "utf-8", (error, data) => {
  if (error) {
    throw error;
  }
  const decryptedData = decrypt(data, SECRET_KEY);
  fs.writeFile("documento-dec.txt", decryptedData, () => {
    console.log("Documento desencriptado!");
  });
});
