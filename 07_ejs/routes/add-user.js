const express = require("express");
const routers = express.Router();
const user = [];
routers.get("/add-user", (req, res) => {
  //   res.sendFile(path.join(__dirname, "views", "add-user.html"));
  res.render("add-user", { pageTitle: "Add User" });
});

routers.post("/add-user", (req, res) => {
  //   user.push(userdata:req.body.name);
  //console.log(req.body);
  user.push(req.body);
  //   console.log(user);
  res.redirect("/");
});

module.exports = {
  routers: routers,
  userArr: user
};
