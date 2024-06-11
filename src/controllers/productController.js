const productService = require("../services/productService");
const db = require("../database/models");
const { validationResult } = require("express-validator");

const productController = {
  cart: (req, res) => {
    res.render("cart");
  },
  formulary: (req, res) => {
    res.render("formulary", { errors: {}, oldData: {} });
  },
  products: (req, res) => {
    db.Product.findAll()
      .then(function (products) {
        res.render("products", { products: products });
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error al cargar la página");
      });
  },
  productCard: (req, res) => {
    db.Product.findAll()
      .then(function (products) {
        res.render("productCard", { products: products });
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error al cargar la página");
      });
  },
  create: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("formulary", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

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
    db.Product.findByPk(req.params.id)
      .then(function (products) {
        res.render("productDetail", { products: products });
      })
      .catch((err) => {
        res.status(500).send({ error: err.message });
      });
  },
  edit: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then(function (products) {
        res.render("editForm", { products: products, errors: {}, oldData: {} });
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error al cargar la página");
      });
  },
  update: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return db.Product.findByPk(req.params.id)
        .then((product) => {
          res.render("editForm", {
            products: product,
            errors: errors.mapped(),
            oldData: req.body,
          });
        })
        .catch((err) => {
          res.status(500).send({ error: err.message });
        });
    }

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
