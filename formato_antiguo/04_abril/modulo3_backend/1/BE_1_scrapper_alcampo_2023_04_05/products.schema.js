const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    productName: { type: String, required: true, trim: true },
    priceUd: { type: Number, required: true },
    img: { type: String, required: true },
  },
  { timeStamps: true, collection: "products" }
);

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;