const productModel = require("../models/Product.js");
const { faker } = require("@faker-js/faker");

class productsController {
  // [GET] /api/products/
  get(req, res, next) {
    productModel
      .find({})
      .then((products) => {
        return res.status(200).json({
          message: "Thành Công",
          data: products,
        });
      })
      .catch(next);
  }

  // [GET] /api/products/:code
  getOne(req, res, next) {
    const productId = req.params.productId;

    productModel
      .findOne({ productId: productId })
      .then((product) => {
        return res.status(200).json({
          message: "Thành Công",
          data: product,
        });
      })
      .catch(next);
  }
  // [POST] /api/products/
  post(req, res, next) {
    const data = req.body;
    const newProduct = new productModel({ ...data, productId: faker.string.uuid() });
    newProduct
      .save()
      .then((product) => {
        return res.json({ message: "Thành Công", data: product });
      })
      .catch(next);
  }

  // [put] /api/products/:productId
  put(req, res, next) {
    const data = req.body;
    const productId = req.params.productId;
    productModel
      .findOneAndUpdate({ productId: productId }, data)
      .then((product) => {
        return res.status(200).json({
          message: "Thành Công",
          data: product,
        });
      })
      .catch(next);
  }

  // [delete] /api/products/:productId
  delete(req, res, next) {
    const productId = req.params.productId;
    productModel
      .findOneAndDelete({ productId: productId })
      .then((product) => {
        return res.status(200).json({
          message: "Thành Công",
          data: product,
        });
      })
      .catch(next);
  }
}

module.exports = new productsController();
