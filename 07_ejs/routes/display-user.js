const express = require("express");
const routers = express.Router();
const addUserModule = require("./add-user");

routers.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "views", "display-user.html"));
  const user = addUserModule.userArr;
  console.log(user);
  res.render("display-user", { pageTitle: "User Display", userData: user });
});

module.exports = {
  routers: routers
};
