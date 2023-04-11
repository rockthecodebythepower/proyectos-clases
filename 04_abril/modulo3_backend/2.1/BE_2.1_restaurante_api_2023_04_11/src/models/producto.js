const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nombre: {type: String, trim: true, required: true},
    imagen: {type: String, trim: true, required: true},
    precio: {type: Number, required: true},
    alergenos: [{type: String}]
}, {
    timestamps: true,
    collection: "products"
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;