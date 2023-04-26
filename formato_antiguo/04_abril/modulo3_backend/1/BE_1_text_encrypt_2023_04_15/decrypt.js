const fs = require("fs")
const crypto = require("crypto-js")
const dotenv = require("dotenv")
dotenv.config()

const secretKey = process.env.SECRET_KEY

const decrypt = (text, key) => {
  const decryptedText = crypto.AES.decrypt(text, key)

  return decryptedText.toString(crypto.enc.Utf8)
}

fs.readFile("documento-enc.txt", "utf-8", (err, data) => {
  if (err) {
    throw err
  }

  const decryptedText = decrypt(data, secretKey)

  fs.writeFile("documento-dec.txt", decryptedText, (err) => {
    if (err) {
      throw err
    }
    console.log("El archivo se ha desencriptado correctamente")
  })
})
