const Product = require("../models/product");

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error obteniendo los proudctos", error });
  }
};

const postProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    return res.status(201).json(product);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error publicando el producto", error });
  }
};

module.exports = {
  getProducts,
  postProduct,
};
