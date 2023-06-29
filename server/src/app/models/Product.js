const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
    sale: {
      type: Number,
    },
    description: {
      type: String,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    size: [{ type: String }],
    thumbnail: {
      type: String,
      required: true,
    },
    image: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("productModel", Product);
