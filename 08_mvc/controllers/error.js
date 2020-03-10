exports.notFound = (req, res) => {
  //   res.send(`express Module`);
  //   res.sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404", { pageTitle: "Not Found" });
};
