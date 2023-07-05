const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  try {
    const token = req.headers.token;
    const { userId } = jwt.verify(token.split(" ")[1], "mk");
    if (userId) {
      req.body.userId = userId;
      next();
    }
  } catch (error) {
    return res.status(400).json({
      message: "Đăng nhập thất bại",
    });
  }
};

module.exports = checkLogin;
