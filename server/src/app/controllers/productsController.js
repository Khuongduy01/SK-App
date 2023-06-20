const productModel = require("../models/Product.js");

class productsController {
  // [GET] /api/products/
  get(req, res, next) {
    productModel
      .find({})
      .then((products) => {
        res.json(products);
      })
      .catch(next);
  }

  // [GET] /api/products/:code
  getOne(req, res, next) {
    const code = req.params.code;

    productModel
      .findOne({ code: code })
      .then((product) => {
        res.json({ product });
      })
      .catch(next);
  }
  // [POST] /api/products/
  post(req, res, next) {
    const data = req.body;
    const newProduct = new productModel(data);
    newProduct
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch(next);
  }

  // [POST] /api/products/:code
  put(req, res, next) {
    const user = req.body;
    const code = req.params.code;
    productModel
      .findOneAndUpdate({ code: code }, user)
      .then(() => {
        res.json({ message: true });
      })
      .catch(next);
  }

  // [POST] /api/products/:code
  delete(req, res, next) {
    const user = req.body;
    const code = req.params.code;
    productModel
      .findOneAndDelete({ code: code }, user)
      .then(() => {
        res.json({ message: true });
      })
      .catch(next);
  }
}

module.exports = new productsController();
