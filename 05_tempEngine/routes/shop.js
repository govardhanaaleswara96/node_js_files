const path = require("path");
const express = require("express");
const routes = express.Router();
const rootDir = require("../util/path");
const adminRoute = require("./admin");
routes.get("/", (req, res, next) => {
  const products = adminRoute.products;
  // res.sendFile(path.join(rootDir, "view", "shop.html"));
  res.render("shop", { prod: products, doctype: "My Shop" });
});

module.exports = routes;
