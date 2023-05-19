//? Importando el modelo Character
const Character = require("../models/characters");

//! esta función únicamente será ejecutada cuando se llegue a ella mediante las rutas.
//* todos mis controladores (menos el control de errores pero en esta api no lo hemos creado) van a recibir req, res, next, en ese orden .
//? esto es una función asíncrona porque cada vez que hagamos peticiones a un back van a tardar tiempo, inserciones, modificaciones, eliminaciones...
const getCharacters = async (req, res, next) => {

    //! tendremos un trycatch porque es susceptible de que falle e intentaremos controlar los fallos
    try {
        
        //! mongoose al crear el model nos ofrece una gama de métodos que podemos utilizar para hacer inserciones, consultas... por ejemplo el .find() me busca todos los datos de ese modelo
        //* el modelo es muy importante porque contiene la información de mi colección y de mi esquema.
        //? metemos todos los personajes en la variable characters
        const characters = await Character.find();

        if (characters.length === 0) {
            return res.status(200).json("No tienes personajes 🤷‍♂️");
        }

        //! retornamos una respuesta con el status 200 y un json con los personajes que hemos encontrado
        return res.status(200).json(characters)

    } catch (error) {
        console.log("Error leyendo los personajes 😫");
    }

}

const postCharacter = async (req, res, next) => {

    try {
        
        const newCharacter = new Character({
            name: req.body.name,
            image: req.body.image,
            evil: req.body.evil,
            description: req.body.description,
            life: req.body.life,
            damage: req.body.damage,
            stars: (req.body.life * req.body.damage / 1000).toFixed(1)
        });

        const character = await newCharacter.save();

        return res.status(201).json(character);

    } catch (error) {
        return res.status(400).json({mensaje: "Error creando el personaje 😫", error: error})
    }

}

const filterCharactersByStars = async (req, res, next) => {

    try {

        const { stars } = req.params;

        const charactersFiltered = await Character.find({stars: {$gte: stars}});

        return res.status(200).json(charactersFiltered);
        
    } catch (error) {
        return res.status(400).json({mensaje: "Error filtrando", error: error})
    }

}

//! exportamos las funciones correspondientes
module.exports = {
    getCharacters,
    postCharacter,
    filterCharactersByStars
}