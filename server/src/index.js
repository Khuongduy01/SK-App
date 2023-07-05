const path = require("path");
const express = require("express");
const app = express();
const db = require("./config/db");
const port = 3001;
const route = require("./routes/index");
var cookieParser = require("cookie-parser");
const cors = require("cors");
var methodOverride = require("method-override");

db.connect();

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser({ keepExtensions: true, uploadDir: "uploads" }));

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
