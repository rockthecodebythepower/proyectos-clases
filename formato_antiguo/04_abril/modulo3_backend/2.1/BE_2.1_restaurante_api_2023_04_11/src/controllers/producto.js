const { setError } = require("../config/error");
const Product = require("../models/producto");


const getProducts = async (req, res, next) => {

    try {

        const products = await Product.find();
        return res.status(200).json(products);

    } catch (error) {
        return next(setError(400, error))
    }

}

const getProductById = async (req, res, next) => {

    try {

        const { id } = req.params;

        const product = await Product.findById(id);
        
        return res.status(200).json(product);

    } catch (error) {
        return next(setError(400, error))
    }

}

const postProduct = async (req, res, next) => {

    try {
        
        const product = new Product(req.body);

        const newProduct = await product.save();
       
        return res.status(200).json(newProduct);

    } catch (error) {
        return next(setError(400, "No se ha podido crear el producto"))
    }

}

const putProduct = async (req, res, next) => {

    try {
       
        const { id } = req.params;

        const productModify = new Product(req.body);

        productModify._id = id;

        const updatedProduct = await Product.findByIdAndUpdate(id, productModify, {new: true});

        return res.status(200).json(updatedProduct);

    } catch (error) {
        return next(setError(400, error))
    }

}

const deleteProduct = async (req, res, next) => {

    try {
       
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        return res.status(200).json(deletedProduct);

    } catch (error) {
        return next(setError(400, error))
    }

}

module.exports = {
    getProducts,
    postProduct,
    getProductById,
    putProduct,
    deleteProduct
}