const express = require("express");
const routers = express.Router();
const products = require("../controllers/product");
routers.get("/add-user", products.addGetProducts);

routers.post("/add-user", products.addPostProducts);

module.exports = {
  routers: routers
};
