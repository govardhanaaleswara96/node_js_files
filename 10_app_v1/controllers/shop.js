const Products = require("../models/product");
const Cart = require("../models/cart");
const shop = (req, res) => {
  Products.fetchAll(products => {
    res.render("shop/index", { title: "Shop", prods: products });
  });
};

const getCart = (req, res) => {
  Cart.getCart(cart => {
    Products.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(p => p.id == product.id);
        if (cartProductData) {
          console.log(cartProductData);
          cartProducts.push({
            productData: product,
            qty: cartProductData.qty
          });
        }
      }
      res.render("shop/cart", { title: "Cart", products: cartProducts });
    });
  });
};

const postCart = (req, res) => {
  const id = req.body.productId;
  console.log(id);
  Products.findById(id, product => {
    Cart.addProduct(id, product.price);
  });

  // res.render("shop/cart", { title: "Cart" });
  res.redirect("/products/cart");
};
const checkout = (req, res) => {
  res.render("shop/checkout", { title: "Checkout" });
};
const order = (req, res) => {
  res.render("shop/order", { title: "Order" });
};
const productDetail = (req, res) => {
  const id = req.params.id;
  Products.findById(id, product => {
    // console.log(product);
    res.render("shop/product-detail", {
      title: "Product Details",
      product: product
    });
  });
  // res.redirect("/");
};
const productList = (req, res) =>
  Products.fetchAll(products => {
    res.render("shop/product-list", { title: "Product-list", prods: products });
  });

module.exports = {
  shop,
  getCart,
  postCart,
  checkout,
  order,
  productDetail,
  productList
};
