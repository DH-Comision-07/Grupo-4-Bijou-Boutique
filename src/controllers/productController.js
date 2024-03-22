const productService = require("../models/productService");

const productController = {
  productDetail: (req, res) => {
    res.render("productDetail");
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
  formulario: (req, res) => {
    res.render("formulario");
  },
  productCard: (req, res) => {
    res.render("productCard", { products: productService.getAll() });
  },
};

module.exports = productController;
