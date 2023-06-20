const { fa } = require("@faker-js/faker");
const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  try {
    const token = req.cookies.token;

    const userId = jwt.verify(token.split(" ")[1], "mk");

    if (userId) {
      req.body.id = userId;
      next();
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports = checkLogin;
