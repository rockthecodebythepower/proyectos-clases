const cloudinary = require('cloudinary').v2

const deleteFile = (imgUrl) => {
    const imgSplited = imgUrl.split("/").slice(-2);
    const nameSplited = imgSplited.at(-1).slice(0, imgSplited.at(-1).indexOf("."));
    const public_id = `${imgSplited.at(-2)}/${nameSplited}`

    cloudinary.uploader.destroy(public_id, () => {
        console.log('Image delete in cloudinary')
    })
}

module.exports = { deleteFile }