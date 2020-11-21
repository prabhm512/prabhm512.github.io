// const db = require("../models");

const path = require("path");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/portfolio", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  })

  app.get("/contact", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/contact.html"));
  })
};
