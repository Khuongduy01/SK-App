var express = require("express");
var router = express.Router();
var checkLogin = require("../app/controllers/checkLogin.js");
var checkAdmin = require("../app/controllers/checkAdmin.js");

const productsController = require("../app/controllers/productsController.js");

router.get("/", productsController.get);

router.get("/:code", productsController.getOne);

router.post("/", checkLogin, checkAdmin, productsController.post);

router.put("/:code", checkLogin, checkAdmin, productsController.put);

router.delete("/:code", checkLogin, checkAdmin, productsController.delete);

module.exports = router;
