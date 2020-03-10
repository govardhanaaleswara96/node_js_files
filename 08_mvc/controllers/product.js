const Product = require("../models/product");
exports.addGetProducts = (req, res) => {
  res.render("add-user", { pageTitle: "Add User" });
};

exports.addPostProducts = (req, res) => {
  //   user.push(req.body);
  const product = new Product(
    req.body.name,
    req.body.email,
    req.body.age,
    req.body.gender,
    req.body.city
  );
  product.save();
  res.redirect("/");
};

exports.showProducts = (req, res) => {
  const products = Product.fetchAll();
  console.log(products);
  res.render("display-user", { pageTitle: "User Display", userData: products });
};
