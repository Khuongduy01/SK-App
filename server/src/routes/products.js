var express = require("express");
var router = express.Router();
var checkLogin = require("../middleware/checkLogin.js");
var checkAdmin = require("../middleware/checkAdmin.js");
var upload = require("../middleware/upload.js");

const productsController = require("../app/controllers/productsController.js");

router.get("/", productsController.get);

router.get("/:productId", productsController.getOne);

router.post(
  "/",
  checkLogin,
  checkAdmin,
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "image", maxCount: 5 },
  ]),
  productsController.post
);

router.put("/:productId", checkLogin, checkAdmin, productsController.put);

router.delete("/:productId", checkLogin, checkAdmin, productsController.delete);

module.exports = router;
