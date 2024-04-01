const productService = require("../models/productService");

const productController = {
  cart: (req, res) => {
    res.render("cart");
  },
  formulary: (req, res) => {
    res.render("formulary");
  },
  create: (req, res) => {
    console.log(req.body); // Deberías ver los datos del formulario aquí
    console.log(req.file); // Aquí deberías ver información sobre el archivo cargado
    let newProductData = req.body;
    if (req.file) {
        newProductData.image = req.file.filename; // Añade el nombre del archivo al objeto de datos del producto
    }
    productService.createProduct(newProductData);
    res.redirect('/products');
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
  // Update - Form to edit
  editForm: (req, res) => {
    res.render("edit-form", {
      products: productService.getOne(req.params.id),
    });
  },
  // Update - Method to updates
  update: (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    productService.editarProducto(id, updatedData);
    res.redirect(`/products/${id}`);
  },
  destroy: (req, res) => {
    productService.eliminarProducto(req.params.id);
    res.redirect(`/products`);
  },
};

module.exports = productController;
