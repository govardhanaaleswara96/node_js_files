const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("./router/admin");
const showRoute = require("./router/shop");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoute);
app.use(showRoute);
app.use((req, res) => {
  res.status(404).sendfile(path.join(__dirname, "views", "404.html"));
});
const server = http.createServer(app);

server.listen(3000);
