const path = require("path");
const express = require("express");
const rootUrl = require("../util/root");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendfile(path.join(rootUrl, "views", "show.html"));
});

module.exports = router;
