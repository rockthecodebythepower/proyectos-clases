const { setError } = require("../config/error");
const Pedido = require("../models/pedido");
const Product = require("../models/producto");


const getPedidos = async (req, res, next) => {

    try {

        const pedido = await Pedido.find();
        return res.status(200).json(pedido);

    } catch (error) {
        return next(setError(400, error))
    }

}

const getPedidoById = async (req, res, next) => {

    try {

        const { id } = req.params;

        const pedido = await Pedido.findById(id);
        
        return res.status(200).json(pedido);

    } catch (error) {
        return next(setError(400, error))
    }

}

const postPedido = async (req, res, next) => {

    try {
        
        const pedido = new Pedido(req.body);

        pedido.precio = 0;

        for (const e of req.body.pedido) {
            const product = await Product.findById(e.product);
            const precio = product.precio * e.cantidad;
            pedido.precio += precio;
        }

        const newPedido = await pedido.save();
       
        return res.status(200).json(newPedido);

    } catch (error) {
        return next(setError(400, "No se ha podido crear el pedido"))
    }

}

const putPedido = async (req, res, next) => {

    try {
       
        const { id } = req.params;

        const pedidoModify = new Pedido(req.body);

        pedidoModify._id = id;

        const updatedPedido = await Pedido.findByIdAndUpdate(id, pedidoModify, {new: true});

        return res.status(200).json(updatedPedido);

    } catch (error) {
        return next(setError(400, error))
    }

}

module.exports = {
    getPedidos,
    postPedido,
    getPedidoById,
    putPedido
}