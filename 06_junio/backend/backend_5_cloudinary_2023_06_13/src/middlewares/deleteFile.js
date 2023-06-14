const cloudinary = require("cloudinary").v2;

const deleteFile = (url) => {

    //? el public_id que ellos llaman no es más que el nombre de la carpeta donde se encuentra el archivo seguido de una barra y el nombre del archivo.

    // lo que me llega
    //* https://res.cloudinary.com/dhp2zuftj/image/upload/v1686671968/stardewValley/gz7ds55oiy2jwezpmrjf.png

    // con lo quiero quedar
    //! stardewValley/gz7ds55oiy2jwezpmrjf

    const arrayElementos = url.split("/"); // ["https:", "", "res.cloudinary.com", "dhp2zuftj", "image", "upload", "v1686671968", "stardewValley", "gz7ds55oiy2jwezpmrjf.png"];

    const folder = arrayElementos.at(-2);
    const archivo = arrayElementos.at(-1).slice(0, arrayElementos.at(-1).indexOf("."));

    const urlDefinitiva = `${folder}/${archivo}`

    cloudinary.uploader.destroy(urlDefinitiva, () => {
        console.log("Imagen destruida");
    })

}

module.exports = { deleteFile }