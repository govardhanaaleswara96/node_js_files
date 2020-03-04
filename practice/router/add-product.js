const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const products = [];
router.get("/add-product", (req, res) => {
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Product" });
});

router.post("/add-product", (req, res) => {
  // console.log(req.body);
  products.push(req.body);
  res.redirect("/");
});

module.exports = {
  router: router,
  products: products
};
