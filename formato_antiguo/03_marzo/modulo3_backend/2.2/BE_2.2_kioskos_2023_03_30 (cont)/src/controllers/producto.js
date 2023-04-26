const { setError } = require("../config/error");
const Producto = require("../models/producto");

const getAllProductos = async (req, res, next) => {
  try {
    const productoDB = await Producto.find();
    return res.status(200).json(productoDB);
  } catch (error) {
    next(setError(500, "Error al leer los productos"));
  }
};

const getProductoById = async (req, res, next) => {
  try {

    const {id} = req.params;
    const productoDB = await Producto.findById(id);
    return res.status(200).json(productoDB);
  } catch (error) {
    next(setError(500, "Error al obtener el producto"));
  }
};

const getProductoByName = async (req, res, next) => {
  try {

    const {name} = req.params;
    const productoDB = await Producto.findOne({nombre: name});
    return res.status(200).json(productoDB);
  } catch (error) {
    next(setError(500, "Error al obtener el producto"));
  }
};

const filterByCity = async (req, res, next) => {

  try {
    const {ciudad} = req.params;
    let productos = await Producto.find({ciudad});
    return res.status(200).json(productos);
  } catch (error) {
    next(setError(500, "Error al obtener los productos"));
  }

}

const postNewProducto = async (req, res, next) => {
  try {
    //! req -> request -> petición -> obtengo el body
    const newProducto = new Producto(req.body);
    const productoDB = await newProducto.save();
    return res.status(201).json(productoDB);
  } catch (error) {
    next(setError(500, "Error al crear el producto"));
  }
};

const updateProducto = async (req, res, next) => {

  try {
    //! necesito identificar que producto quiero actualizar
    const { id } = req.params;
    const putProducto = new Producto(req.body);
    putProducto._id = id;
    const camposActualizados = req.body;

    const oldProducto = await Producto.findById(id);
    const productoUpdated = await Producto.findByIdAndUpdate(id, putProducto, {new: true});

    return res.status(200).json({new: productoUpdated, old: oldProducto, camposActualizados});

  } catch (error) {
    next(setError(400, "No se ha podido actualizar el producto"))
  }

}

const deleteProducto = async (req, res, next) => {
  try {

    const {id} = req.params;
    const eliminado = await Producto.findByIdAndDelete(id);
    return res.status(200).json({eliminado});

  } catch (error) {
    next(setError(400, "No se ha podido eliminar el producto"));
  }
}

module.exports = {
  getAllProductos,
  postNewProducto,
  updateProducto,
  deleteProducto,
  getProductoByName,
  filterByCity,
  getProductoById
};