const productService = require("../models/productService");

const productController = {
  cart: (req, res) => {
    res.render("cart");
  },
  formulary: (req, res) => {
    res.render("formulary");
  },
  products: (req, res) => {
    res.render("products", { products: productService.getAll() });
  },
  productCard: (req, res) => {
    res.render("productCard", { products: productService.getAll() });
  },
  detail: (req, res) => {
    res.render("productDetail", {
      products: productService.getOne(req.params.id),
    });
  },
  editForm: (req, res) => {
    res.render("edit-form");
  },
    // Update - Method to update
    update: (req, res) => {
      const { id } = req.params;
      const updatedData = req.body;
      productService.editarProducto(id, updatedData);
      res.redirect(`/products/${id}`);
    },
  
    // Delete - Delete one product from DB
    destroy: (req, res) => {
      productService.eliminarProducto(req.params.id);
      res.redirect(`/products`);
    },
};

module.exports = productController;
