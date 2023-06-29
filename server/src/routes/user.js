var express = require("express");
var router = express.Router();
var checkLogin = require("../middleware/checkLogin.js");
var checkAdmin = require("../middleware/checkAdmin.js");

const userController = require("../app/controllers/userController.js");

router.get("/", checkLogin, checkAdmin, userController.get);

router.post("/login", userController.login);

router.post("/register", userController.register);

router.put("/", checkLogin, userController.update);

router.delete("/:userId", checkLogin, checkAdmin, userController.delete);

module.exports = router;
