const productService = require("../models/productService");

const userController = {
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  userCard: (req, res) => {
    res.render("userCard", { products: productService.getAll() });
  },
};

module.exports = userController;
