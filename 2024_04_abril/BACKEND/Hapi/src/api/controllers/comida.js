const Comida = require("../models/comida")

const getComidas = async (request, h) => {
    try {
        const comidas = await Comida.find();
        return h.response(comidas).code(200);
    } catch (error) {
        return h.response(error).code(400);
    }
}

const getComidaById = async (request, h) => {
    try {
        const { id } = request.params;
        const comida = await Comida.findById(id);
        return h.response(comida).code(200);
    } catch (error) {
        return h.response(error).code(400);
    }
}

const postComida = async (request, h) => {
    try {

        await h.file()(request, h);

        const newComida = new Comida(request.payload);

        console.log(request.file);

        const comida = await newComida.save();
        return h.response(comida).code(200);
    } catch (error) {
        return h.response(error).code(400);
    }
}

module.exports = { getComidas, postComida, getComidaById }