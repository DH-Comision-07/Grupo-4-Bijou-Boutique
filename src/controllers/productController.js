const productService = require("../models/productService");

const productController = {
  productDetail: (req, res) => {
    res.render("productDetail");
  },
  cart: (req, res) => {
    res.render("cart");
  },
  form: (req, res) => {
    res.render("form");
  },
  productCard: (req, res) => {
    res.render("productCard", { products: productService.getAll() });
  },
  detail: (req, res) => {
    res.render("productDetail", {
      products: productService.getOne(req.params.id),
    });
  },
};

module.exports = productController;
