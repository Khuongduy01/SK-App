const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage }, function fileFilter(req, file, cb) {
  if (file.mimetype == "img/png" || file.mimetype == "img/jpg") {
    cb(null, true);
  } else {
    console.log("Không hỗ trợ upload File này");
    cb(null, false);
  }
});

module.exports = upload;
