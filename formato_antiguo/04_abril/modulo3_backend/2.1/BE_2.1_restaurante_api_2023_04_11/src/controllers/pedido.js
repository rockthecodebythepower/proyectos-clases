const { setError } = require("../config/error");
const Pedido = require("../models/pedido");
const Product = require("../models/producto");


const getPedidos = async (req, res, next) => {

    try {

        const pedido = await Pedido.find().populate("mesa");
        return res.status(200).json(pedido);

    } catch (error) {
        return next(setError(400, error))
    }

}

const getPedidoById = async (req, res, next) => {

    try {

        const { id } = req.params;

        const pedido = await Pedido.findById(id).populate("mesa");
        
        return res.status(200).json(pedido);

    } catch (error) {
        return next(setError(400, error))
    }

}

const postPedido = async (req, res, next) => {

    try {
        
        const pedido = new Pedido(req.body);

        pedido.precio = 0;
        pedido.estado = "proceso";

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

        const oldPedido = await Pedido.findById(id);
        pedidoModify._id = id;

        pedidoModify.pedido = [...oldPedido.pedido];

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