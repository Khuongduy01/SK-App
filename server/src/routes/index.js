const userRouter = require("./user.js");
const productsRouter = require("./products.js");

function router(app) {
  app.use("/api/user", userRouter);
  app.use("/api/products", productsRouter);
}

module.exports = router;
