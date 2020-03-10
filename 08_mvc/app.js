const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const addUserRouters = require("./routes/add-user");
const displayUserRouters = require("./routes/display-user");
const notFoundRouter = require("./controllers/error");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(addUserRouters.routers);
app.use(displayUserRouters.routers);

app.use(notFoundRouter.notFound);
app.listen(2000);
