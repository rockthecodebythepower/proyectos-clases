const Cuadro = require("../models/cuadro");

//! CRUD -> create read update delete

//! Create
const postCuadro = async (req, res, next) => {
    try {
        const newCuadro = new Cuadro(req.body);

        const cuadroSaved = await newCuadro.save();

        return res.status(201).json(cuadroSaved);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
}

//! Read
const getCuadros = async (req, res, next) => {
    try {
        
        // Model.find() -> encuentra TODOS los datos de dicha colección
        const allCuadros = await Cuadro.find();

        return res.json(allCuadros);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

module.exports = { getCuadros, postCuadro };