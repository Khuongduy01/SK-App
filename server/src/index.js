const path = require("path");
const express = require("express");
const app = express();
const db = require("./config/db");
const port = 3001;
const route = require("./routes/index");
var cookieParser = require("cookie-parser");
const cors = require("cors");

db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((err, req, res, next) => {
  res.status(500).send("Có Lỗi Xảy Ra");
});

app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
