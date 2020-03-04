const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const expressHbs = require("express-handlebars");
const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "view/layoutes",
    defaultLayout: "main-layout",
    extname: "hbs"
  })
);

app.set("view engine", "hbs");
app.set("views", "view");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes.routes);
app.use(shopRoutes);

// 404 error page
app.use((req, res) => {
  // res.status(404).sendfile(path.join(__dirname, "view", "not_found.html"));
  res.render("404", { doctype: "Not Found !" });
});

// res.sendFile(path.join(__dirname, ", "view", "shop.html"));

const server = http.createServer(app);

server.listen(2000);
