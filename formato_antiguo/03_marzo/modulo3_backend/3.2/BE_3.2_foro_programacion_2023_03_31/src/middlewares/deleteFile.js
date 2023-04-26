const cloudinary = require("cloudinary").v2;

const deleteFile = (imgUrl) => {
  const imgSplited = imgUrl.split("/");
  const folderName = imgSplited.at(-2);
  const nameSplited = imgSplited.at(-1).split(".");
  const public_id = `${folderName}/${nameSplited.at(0)}`;
  console.log(public_id);

  //! el .at me permite acceder a posiciones negativas (el -1 es la última posición del array, es decir, valores positivos se interpretan como con el [1] pero los valores negativos que con el [-1] no podemos interpretar la función at, nos lo permite)
  /* const folderSplited2 = imgSplited.at(-2); */

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Imagen eliminada");
  });
};

module.exports = { deleteFile };
