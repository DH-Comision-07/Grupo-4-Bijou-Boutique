const productService = require("../models/productService");

const indexController = {
  index: (req, res) => {
    res.render("home", { products: productService.getAll() });
  },
  aboutUs: (req, res) => {
    res.render("aboutUs");
  },
};

module.exports = indexController;
