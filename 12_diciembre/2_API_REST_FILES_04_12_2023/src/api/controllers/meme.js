const { deleteFile } = require("../../utils/deleteFile");
const Meme = require("../models/meme");

const getMemes = async (req, res, next) => {
    try {
        const memes = await Meme.find();
        return res.status(200).json(memes);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const postMeme = async (req, res, next) => {
    try {
        const newMeme = new Meme(req.body);
        if (req.files) {
            newMeme.img = req.files.img[0].path;
            /* newMeme.img2 = req.files.img2[0].path; */
        }
        const memeSaved = await newMeme.save();
        return res.status(201).json(memeSaved);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const deleteMeme = async (req, res, next) => {
    try {
        const { id } = req.params;
        const memeDeleted = await Meme.findByIdAndDelete(id);
        deleteFile(memeDeleted.img);
        return res.status(200).json({
            mensaje: "Elemento eliminado",
            memeDeleted
        })
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = { getMemes, postMeme, deleteMeme }