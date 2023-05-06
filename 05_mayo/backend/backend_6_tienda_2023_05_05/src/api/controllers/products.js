const Product = require("../models/products");

//! $gt -> greater than -> un dato es mayor que el dato que está mirando

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find();

    return res.status(200).json(allProducts);
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: "error al obtener los productos", error: error });
  }
};

const getFilteredProducts = async (req, res, next) => {
  try {
    const price = req.query.price || 99999999;
    const category = req.query.category || "";

    console.log(price);

    const products = await Product.find({ finalPrice: { $lte: price }, category });

    return res.status(200).json(products);
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: "error al obtener los productos", error: error });
  }
};

const postProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);   

    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: "error al crear un producto", error: error });
  }
};

module.exports = {
  getAllProducts,
  postProduct,
  getFilteredProducts,
};
