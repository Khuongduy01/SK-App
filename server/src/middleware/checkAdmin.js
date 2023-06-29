const userModel = require("../app/models/User.js");

const checkAdmin = (req, res, next) => {
  const userId = req.body.userId;
  userModel
    .findOne({ userId: userId })
    .then((user) => {
      console.log(user.permission);
      if (user.permission === "admin") {
        next();
      }
    })
    .catch(() => {
      return res.status(400).json({
        message: "Bạn Không Có Quyền Admin",
      });
    });
};

module.exports = checkAdmin;
