const path = require("path");
const express = require("express");
const routes = express.Router();
const rootDir = require("../util/path");
const adminData = require("./admin");
routes.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "view", "shop.html"));
  const products = adminData.products;
  res.render("shop", {
    docTitle: "shop",
    prods: products,
    hashProducts: products.length > 0
  });
});

module.exports = routes;
