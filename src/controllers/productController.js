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
    res.render("edit-form", {
      products: productService.getOne(req.params.id),
    });
  },
  // Update - Method to update
  update: (req, res) => {
    productService.editProduct(req.params.id, req.body);
    const updatedProduct = {
      name: req.body.name,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    };
    res.redirect(`/products/${req.params.id}`);
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    productService.deleteProduct(req.params.id);
    res.redirect(`/productCard`);
  },
};

module.exports = productController;
