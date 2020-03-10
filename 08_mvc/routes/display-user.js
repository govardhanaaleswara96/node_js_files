const express = require("express");
const routers = express.Router();
const products = require("../controllers/product");

routers.get("/", products.showProducts);

module.exports = {
  routers: routers
};
