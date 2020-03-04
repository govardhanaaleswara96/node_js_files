const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const addUserRouters = require("./routes/add-user");
const displayUserRouters = require("./routes/display-user");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(addUserRouters.routers);
app.use(displayUserRouters.routers);

app.use((req, res) => {
  //   res.send(`express Module`);
  //   res.sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404", { pageTitle: "Not Found" });
});
app.listen(2000);
