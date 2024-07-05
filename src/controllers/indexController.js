const db = require("../database/models");

const indexController = {
  index: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("home", {
        products: products,
        user: req.session.usuarioLogueado,
      });
    });
  },
  aboutUs: (req, res) => {
    res.render("aboutUs", {
      user: req.session.usuarioLogueado,
    });
  },
};

module.exports = indexController;
