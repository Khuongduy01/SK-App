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
    const token = req.headers.token;
    const data = req.body;

    console.log(data, token);

    if (token && !data.userName && !data.password) {
      try {
        const { userId } = jwt.verify(token.split(" ")[1], "mk");
        console.log(userId);
        userModel.findOne({ userId: userId }).then((user) => {
          if (user.userId) {
            return res.status(200).json({
              message: "Đăng Nhập Thành Công",
              token: token.split(" ")[1],
              data: user,
            });
          }
        });
      } catch (error) {
        return res.status(404).json({ message: "Tài Khoản Không Tồn Tại" });
      }
    } else {
      userModel
        .findOne({ userName: data.userName, password: data.password })
        .then((user) => {
          if (user && user.userId) {
            let accessToken = jwt.sign({ userId: user.userId }, "mk", { expiresIn: "1h" });
            return res.status(200).json({
              message: "Đăng Nhập Thành Công",
              token: accessToken,
              data: user,
            });
          } else {
            return res.status(404).json({ message: "Tài Khoản Không Tồn Tại" });
          }
        })
        .catch(next);
    }
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
              let accessToken = jwt.sign({ userId: user.userId }, "mk", { expiresIn: "1h" });
              return res.status(200).json({
                message: "Tạo Tài Khoản Thành Công",
                token: accessToken,
                data: user,
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
    console.log(data);
    userModel
      .findOneAndUpdate({ userId: data.userId }, data)
      .then((user) => {
        return res.status(200).json({ message: "Cập Nhật Tài Khoản Thành Công", data: user });
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
          return res.status(200).json({ message: "Xóa Tài Khoản Thành Công", data: user });
        } else {
          return res.status(400).json({ message: "Tài Khoản Không Tồn Tại", data: user });
        }
      })
      .catch(next);
  }
}

module.exports = new userController();
