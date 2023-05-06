const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    stock: { type: Number, required: true, default: 1 },
    weight: { type: Number, required: true },
    color: { type: String, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "juguetes",
        "tecnología",
        "hogar",
        "carpintería",
        "alimentación",
        "deportes",
      ],
    },
    price: { type: Number, required: true },
    new: { type: Boolean, default: true, required: true },
    discount: { type: Number, required: true, default: 0 },
    image: { type: String, required: true },
    finalPrice: {
      type: Number,
      required: true,
      default: 0
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

productSchema.pre("save", function (next) {

  this.finalPrice = (this.price - this.price * this.discount).toFixed(2);
  next();

});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
