var express = require("express");
var router = express.Router();
var checkLogin = require("../app/controllers/checkLogin.js");

const userController = require("../app/controllers/userController.js");

router.get("/", userController.login);

router.post("/", userController.register);

router.put("/", checkLogin, userController.update);

router.delete("/", checkLogin, userController.delete);

module.exports = router;
