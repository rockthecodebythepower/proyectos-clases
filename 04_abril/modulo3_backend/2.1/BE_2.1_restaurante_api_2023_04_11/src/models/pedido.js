const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
    pedido: [{
        product: {type: mongoose.Types.ObjectId, ref: "products", required: true},
        cantidad: {type: Number, required: true, max: 10}
    }],
    precio: {type: Number, required: true},
    estado: {type: String, enum: ["proceso", "hecho", "pagado"]},
    mesa: {type: mongoose.Types.ObjectId, required: true, ref: "mesas"}
}, {
    timestamps: true,
    collection: "pedidos"
});

const Pedido = mongoose.model("pedidos", pedidoSchema);
module.exports = Pedido;