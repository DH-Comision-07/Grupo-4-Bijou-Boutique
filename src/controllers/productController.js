const db = require("../database/models");
const { validationResult } = require("express-validator");

const productController = {
  cart: (req, res) => {
    res.render("cart", { user: req.session.usuarioLogueado });
  },
  formulary: (req, res) => {
    res.render("formulary", {
      errors: {},
      oldData: {},
      user: req.session.usuarioLogueado,
    });
  },
  products: (req, res) => {
    db.Product.findAll()
      .then(function (products) {
        res.render("products", {
          products: products,
          user: req.session.usuarioLogueado,
        });
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error al cargar la página");
      });
  },
  productCard: (req, res) => {
    db.Product.findAll()
      .then(function (products) {
        res.render("productCard", {
          products: products,
          user: req.session.usuarioLogueado,
        });
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
        user: req.session.usuarioLogueado,
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
        res.render("productDetail", {
          products: products,
          user: req.session.usuarioLogueado,
        });
      })
      .catch((err) => {
        res.status(500).send({ error: err.message });
      });
  },
  edit: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((products) => {
        res.render("editForm", {
          products: products,
          errors: {},
          oldData: {},
          user: req.session.usuarioLogueado,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Ocurrió un error al cargar la página");
      });
  },

  update: (req, res) => {
    console.log("req.body  --", req.body);
    console.log("req.file  --", req.file);
    console.log("req.body.image  --", req.body.image);
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Product.findByPk(req.params.id)
        .then((product) => {
          return res.render("editForm", {
            products: product,
            errors: errors.mapped(),
            oldData: req.body,
            user: req.session.usuarioLogueado,
          });
        })
        .catch((err) => {
          return res.status(500).send({ error: err.message });
        });
    } else {
      db.Product.findByPk(req.params.id)
        .then((product) => {
          if (!product) {
            return res.status(404).send("Producto no encontrado");
          }

          const updatedData = {
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            price: req.body.price,
            category: req.body.category,
            image: req.file ? req.file.filename : product.image,
          };

          return db.Product.update(updatedData, {
            where: { id: req.params.id },
          });
        })
        .then(() => {
          res.redirect("/products/productCard");
        })
        .catch((err) => {
          res.status(500).send({ error: err.message });
        });
    }
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
