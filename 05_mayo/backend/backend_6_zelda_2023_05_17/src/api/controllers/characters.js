const Character = require("../models/characters");

const getCharacters = async (req, res, next) => {

    try {
        
        const characters = await Character.find();

        return res.status(200).json(characters)

    } catch (error) {
        console.log("Error leyendo los personajes 😫");
    }

}

module.exports = {
    getCharacters
}