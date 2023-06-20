const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    id: {
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
    },
    phone: {
      type: Number,
      maxLength: 11,
      default: 0,
    },

    address: { type: String, default: "" },
    password: {
      type: String,
      required: true,
      maxLength: 15,
    },
    prefer: [{ idProduct: String }],
    order: [
      {
        code: String,
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userModel", User);
