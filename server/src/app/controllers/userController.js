const userModel = require("../models/User.js");
const jwt = require("jsonwebtoken");
const { faker } = require("@faker-js/faker");

class userController {
  // [get] /api/user/
  get(req, res, next) {
    userModel
      .find({})
      .then((users) => {
        return res.status(200).json({
          message: "Thành Công",
          data: users,
        });
      })
      .catch(next);
  }
  // [post] /api/user/login
  login(req, res, next) {
    const data = req.body;
    userModel
      .findOne({ userName: data.userName, password: data.password })
      .then((user) => {
        if (user && user.userId) {
          let accessToken = jwt.sign(user.userId, "mk");
          return res.status(200).json({
            message: "Đăng Nhập Thành Công",
            token: accessToken,
          });
        } else {
          return res.status(404).json({ message: "Tài Khoản Không Tồn Tại" });
        }
      })
      .catch(next);
  }

  // [Post] /api/user/register

  register(req, res, next) {
    const data = req.body;
    userModel
      .find({ userName: data.userName })
      .then((user) => {
        if (user.length !== 0) {
          return res.status(400).json({ message: "Tên Tài Khoản Đã Tồn Tại" });
        } else {
          const newUser = new userModel({ ...data, userId: faker.string.uuid() });
          newUser
            .save()
            .then((user) => {
              let accessToken = jwt.sign(user.userName, "mk");
              return res.status(200).json({
                message: "Tạo Tài Khoản Thành Công",
                token: accessToken,
              });
            })
            .catch(next);
        }
      })
      .catch(next);
  }

  // [Put] /api/user/

  update(req, res, next) {
    const data = req.body;
    userModel
      .findOneAndUpdate({ userId: data.userId }, data)
      .then(() => {
        return res.status(200).json({ message: "Cập Nhật Tài Khoản Thành Công" });
      })
      .catch(next);
  }

  // [Delete] /api/user/

  delete(req, res, next) {
    const userId = req.params.userId;

    userModel
      .findOneAndDelete({ userId: userId })
      .then((data) => {
        if (data) {
          return res.status(200).json({ message: "Xóa Tài Khoản Thành Công" });
        } else {
          return res.status(400).json({ message: "Tài Khoản Không Tồn Tại" });
        }
      })
      .catch(next);
  }
}

module.exports = new userController();
