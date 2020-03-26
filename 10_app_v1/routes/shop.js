const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");

router.get("/shop", shopController.shop);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.get("/checkout", shopController.checkout);
router.get("/orders", shopController.order);
router.get("/:id", shopController.productDetail);
router.get("/", shopController.productList);
module.exports = router;
