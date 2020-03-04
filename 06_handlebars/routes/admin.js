const path = require("path");
const express = require("express");
const routes = express.Router();
const rootDir = require("../util/path");
const products = [];

routes.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "view", "add-product.html"));
  res.render("add-product", { docTitle: "Add-products" });
});

routes.post("/add-product", (req, res, next) => {
  //   res.send(`<h1>I Am User Page</h1>`);
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = {
  routes: routes,
  products: products
};
