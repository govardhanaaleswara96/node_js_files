const path = require("path");
const express = require("express");
const routes = express.Router();
const rootDir = require("../util/path");
routes.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "shop.html"));
});

module.exports = routes;
