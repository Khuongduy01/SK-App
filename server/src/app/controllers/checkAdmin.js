const userModel = require("../models/User.js");

const checkAdmin = (req, res, next) => {
  try {
    const userId = req.body.id;
    userModel.findOne({ id: userId }).then((user) => {
      if (user.permission === "admin") {
        next();
      }
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = checkAdmin;
