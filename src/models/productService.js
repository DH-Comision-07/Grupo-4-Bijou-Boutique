const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../models/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productService = {
  products: products,
  getAll: function () {
    return this.products;
  },
  getOne: function (id) {
    return this.products.find((product) => product.id == id);
  },
  createProduct: function (newProductData) {
    let newId;
    if (this.products.length > 0) {
      newId = Math.max(...this.products.map(product => product.id)) + 1;
    } else {
      newId = 1;
    }
    const newProduct = { id: newId, ...newProductData };
    this.products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(this.products, null, 2), "utf-8");
  },
  editarProducto: function (id, updatedData) {
    let index = this.products.findIndex(product => product.id == id);
    this.products[index] = {...this.products[index], ...updatedData};
    fs.writeFileSync(productsFilePath, JSON.stringify(this.products), "utf-8");
  },
  eliminarProducto: function (id) {
    let filteredElements = this.products.filter((product) => product.id != id);
    fs.writeFileSync(productsFilePath, JSON.stringify(filteredElements), "utf-8");
  },
};

module.exports = productService;
