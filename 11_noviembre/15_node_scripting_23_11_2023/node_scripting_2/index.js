const fs = require("fs");
const crypto = require("crypto-js");

const ARRAYUSERS = [];

fs.readFile("gimnasio.csv", "utf-8", (err, data) => {
  /* console.log(data); */
  /* const array = data.split(","); */
  const array = data.split("\r\n");
  const keys = array[0].split(",");
  for (let i = 0; i < keys.length; i++) {
    keys[i] = keys[i].replaceAll(" ", "_");
    keys[i] = keys[i].replaceAll("º", "");
    keys[i] = keys[i].replaceAll("ó", "o");
  }

  /* array.splice(0, 1); */
  array.shift();

  for (const element of array) {
    let arrayValues = element.split(",");
    const objeto = {};
    for (let i = 0; i < arrayValues.length; i++) {
        if (keys[i] === "PASSWORD") {
            const encriptado = crypto.AES.encrypt(arrayValues[i], "98f3hfsdfuisdhf98");
            objeto[keys[i]] = encriptado.toString();
        } else {
            objeto[keys[i]] = arrayValues[i];
        }
    }
    ARRAYUSERS.push(objeto);
  }

  const passwordDesencrypted = crypto.AES.decrypt(ARRAYUSERS[0].PASSWORD, "98f3hfsdfuisdhf98");
  fs.writeFile("primerUser.txt", `${ARRAYUSERS[0].NIF}: ${passwordDesencrypted.toString(crypto.enc.Utf8)}`, () => {
    console.log("escrito");
  });

});