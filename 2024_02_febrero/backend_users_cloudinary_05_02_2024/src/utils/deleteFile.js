const cloudinary = require("cloudinary").v2;

const deleteFile = (imgUrl) => {

  const splited = imgUrl.split("/");

  cloudinary.uploader.destroy(
    `${splited.at(-2)}/${splited.at(-1).split(".")[0]}`,
    () => {
      console.log("Image delete in cloudinary");
    }
  );
};

module.exports = { deleteFile }
