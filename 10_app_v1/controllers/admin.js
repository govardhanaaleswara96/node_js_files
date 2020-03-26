const Product = require("../models/product");

const getAddProduct = (req, res) => {
  res.render("admin/edit-product", { title: "Add_products", editing: false });
};

const postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/products/");
};

const getEditProduct = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/products");
  }
  const prodId = req.params.id;
  // console.log(prodId);
  Product.findById(prodId, product => {
    if (!product) {
      res.redirect("/products");
    }
    res.render("admin/edit-product", {
      title: "Edit Product",
      editing: editMode,
      product: product
    });
  });
};
const postEditProduct = (req, res) => {
  // res.send("hii");
  const id = req.body.id;
  const updateTitle = req.body.title;
  const updateImgUrl = req.body.imageUrl;
  const updatePrice = req.body.price;
  const updateDesc = req.body.description;
  const updatedProduct = new Product(
    id,
    updateTitle,
    updateImgUrl,
    updatePrice,
    updateDesc
  );
  updatedProduct.save();
  res.redirect("/products/");
};
const postDeleteProduct = (req, res) => {
  const id = req.body.id;
  console.log(id);
  Product.deleteById(id);
  res.redirect("/products/");
};
const showProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render("admin/product", { title: "Admin Products", prods: products });
  });
};
module.exports = {
  showProducts,
  getAddProduct,
  postAddProduct,
  getEditProduct,
  postEditProduct,
  postDeleteProduct
};
