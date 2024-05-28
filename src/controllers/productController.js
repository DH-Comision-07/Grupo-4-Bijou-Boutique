const db = require("../database/models");

const productService = require("../services/productService");
const productController = {
  cart: (req, res) => {
    res.render("cart");
  },
  formulary: (req, res) => {
    res.render("formulary");
  },
  products: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("products", { products: products });
    });
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
  update: (req, res) => {
    productService.editProduct(req.params.id, req.body);
    const productToUpdate = productService.getOne(req.params.id);
    const updatedProduct = {
      name: req.body.name,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
      image: productToUpdate.image,
    };
    res.redirect("/products/productCard");
  },
  destroy: (req, res) => {
    productService.deleteProduct(req.params.id);
    res.redirect("/products/productCard");
  },
  store: (req, res) => {
    productService.save(req.body);
    res.send(req.body);
  },
};

module.exports = productController;
