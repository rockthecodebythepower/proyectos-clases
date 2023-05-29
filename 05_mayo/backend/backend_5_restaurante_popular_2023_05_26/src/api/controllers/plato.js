const Plato = require("../models/plato")

const getAllPlatos = async (req, res, next) => {

    try {
        
        const platos = await Plato.find();

        return res.status(200).json(platos)

    } catch (error) {
        return res.status(400).json("error")
    }

}

const postPlato = async (req, res, next) => {

    try {
        
        const newPlato = new Plato(req.body);

        const platoDB = await newPlato.save()

        return res.status(201).json(platoDB);

    } catch (error) {
        return res.status(400).json("error")
    }

}

module.exports = { getAllPlatos, postPlato }