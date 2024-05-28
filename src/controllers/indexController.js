const db = require("../database/models");

const indexController = {
  index: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("home", { products: products });
    });
  },
  aboutUs: (req, res) => {
    res.render("aboutUs");
  },
};
module.exports = indexController;
