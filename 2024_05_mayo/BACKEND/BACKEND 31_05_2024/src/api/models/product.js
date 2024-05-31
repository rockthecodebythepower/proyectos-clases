const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    nSales: { type: Number, default: 0 },
    nSearch: { type: Number, default: 0 },
    category: {
      type: String,
      enum: ["Papel", "Tela", "Logotipo", "Madera"],
      required: true,
    },
    offer: { type: Boolean, default: false },
    img: { type: String, required: true },
    /* user: { type: } */
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema, "products");
module.exports = Product;