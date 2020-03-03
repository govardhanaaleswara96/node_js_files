const path = require("path");
const express = require("express");
const routes = express.Router();
const rootDir = require("../util/path");
const products = [];
routes.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "view", "add-product.html"));
  res.render("add-product.pug", { docTitle: "Add_products" });
});

routes.post("/add-product", (req, res, next) => {
  //   res.send(`<h1>I Am User Page</h1>`);
  products.push({ title: req.body.title });
  // console.log(products);
  res.redirect("/");
});

module.exports = {
  routes: routes,
  products: products
};
