const path = require("path");
const express = require("express");
const router = express.Router();
const rootUrl = require("../util/root");

router.get("/add-product", (req, res, next) => {
  res.sendfile(path.join(rootUrl, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
