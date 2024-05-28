const productService = require("../services/productService");
const db = require("../database/models");

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
    db.Product.findAll().then(function (products) {
      res.render("productCard", { products: products });
    });
  },
  create: (req, res) => {
    db.Product.create({
      name: req.body.name,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
      image: req.file.filename,
    })
      .then(() => {
        res.redirect("/products");
      })
      .catch((err) => {
        res.status(500).send({ error: err.message });
      });
  },
  detail: (req, res) => {
    db.Product.findByPk(req.params.id).then(function (products) {
      res.render("productDetail", { products: products });
    });
  },
  edit: (req, res) => {
    db.Product.findByPk(req.params.id).then(function (products) {
      res.render("edit-form", { products: products });
    });
  },
  update: (req, res) => {
    const updatedData = {
      name: req.body.name,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
    };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    db.Product.update(updatedData, {
      where: { id: req.params.id },
    })
      .then(() => {
        res.redirect("/products/productCard");
      })
      .catch((err) => {
        res.status(500).send({ error: err.message });
      });
  },
  destroy: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/products/productCard");
  },
  store: (req, res) => {
    productService.save(req.body);
    res.send(req.body);
  },
};

module.exports = productController;
