const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2000;

app.set("view engine", "ejs");
app.set("views", "views");
const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/products", adminRoutes);
app.use("/products", shopRoutes);
app.use(errorController);

app.listen(port, () => {
  console.log(` Server Is Running Port : ${port}`);
});
