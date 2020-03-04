const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const productRoutes = require("./router/add-product");
const shopRoutes = require("./router/shop");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(productRoutes.router);
app.use(shopRoutes);
app.use((req, res) => {
  //   res.sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404", { pageTitle: "Not Found" });
});

app.listen(3000);
