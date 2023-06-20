const userModel = require("../models/User.js");
const jwt = require("jsonwebtoken");
const { faker } = require("@faker-js/faker");

class userController {
  // [GET] /api/user/
  login(req, res, next) {
    const data = req.body;
    userModel
      .findOne(data)
      .then((user) => {
        if (user && user.id) {
          let accessToken = jwt.sign(user.id, "mk");
          res.json({
            message: true,
            token: accessToken,
          });
        } else {
          res.json({
            message: false,
          });
        }
      })
      .catch(next);
  }

  // [Post] /api/user/

  register(req, res, next) {
    const data = req.body;
    userModel
      .find({ userName: data.userName })
      .then((user) => {
        if (user.length !== 0) {
          res.json({ message: false, data: "tk đã tồn tại" });
        } else {
          const newUser = new userModel({ ...data, id: faker.string.uuid() });
          newUser
            .save()
            .then((user) => {
              let accessToken = jwt.sign(user.userName, "mk");
              res.json({
                message: true,
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
      .findOneAndUpdate({ id: data.id }, data)
      .then(() => {
        res.json({ message: true });
      })
      .catch(next);
  }

  // [Delete] /api/user/

  delete(req, res, next) {
    const data = req.body;
    userModel
      .findOneAndDelete({ id: data.id }, data)
      .then(() => {
        res.json({ message: true });
      })
      .catch(next);
  }
}

module.exports = new userController();
