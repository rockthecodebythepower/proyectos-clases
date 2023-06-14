const { deleteFile } = require("../../middlewares/deleteFile");
const Character = require("../models/characters");

const getCharacters = async (req, res, next) => {
    try {

        const characters = await Character.find();
        
        return res.status(200).json(characters);

    } catch (error) {
        
        return res.status(400).json("El pueblo ha emigrado 💔")

    }
}

const postCharacter = async (req, res, next) => {

    try {

        const newCharacter = new Character(req.body);

        if (req.file) {
            newCharacter.image = req.file.path
        }

        const characterDB = await newCharacter.save();

        return res.status(201).json(characterDB)
        
    } catch (error) {

        console.log(error);
        return res.status(400).json("El pueblo ha explotado 💔")
        
    }

}

const deleteCharacter = async (req, res, next) => {

    try {
        
        const { id } = req.params;

        const characterDeleted = await Character.findByIdAndDelete(id);

        if (characterDeleted.image) {
            deleteFile(characterDeleted.image);
        }

        return res.status(200).json(characterDeleted)

    } catch (error) {
        
        return res.status(400).json("No he podido asesinar a ese personaje 🐒")

    }

}

module.exports = {
    getCharacters,
    postCharacter,
    deleteCharacter
}