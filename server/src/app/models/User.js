const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    userId: {
      type: String,
      require,
    },
    userName: {
      type: String,
      maxLength: 15,
      required: true,
    },
    permission: {
      type: String,
      default: "user",
    },
    gmail: {
      type: String,
      require: true,
      default: "",
    },
    phone: {
      type: Number,
      maxLength: 11,
      default: 0,
    },
    fullName: { type: String, default: "" },
    address: {},
    addressDescription: { type: String, default: "" },
    password: {
      type: String,
      required: true,
      maxLength: 15,
    },
    prefer: [{ idProduct: String }],
    order: [],
    carts: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userModel", User);
