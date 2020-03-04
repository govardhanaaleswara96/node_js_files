const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminRoute = require("./add-product");
const router = express.Router();

// router.get("/", (req, res) => {
//   //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
//   res.render("shop", { pageTitle: "Shop" });
// });

router.get("/", (req, res, next) => {
  const products = adminRoute.products;
  // res.sendFile(path.join(rootDir, "view", "shop.html"));
  console.log(products);
  res.render("shop", { prods: products, pageTitle: "My Shop" });
});

module.exports = router;
