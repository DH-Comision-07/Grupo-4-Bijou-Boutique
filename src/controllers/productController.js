const productController = {
  productDetail: (req, res) => {
    return res.render("productDetail");
  },
  carrito: (req, res) => {
    return res.render("carrito");
  },
  formulario: (req, res) => {
    return res.render("formulario");
  },
};

module.exports = productController;
