const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../services/data/products.json");
const productService = {
  getOne: function (id) {
    return this.getAll().find((product) => product.id == id);
  },
  editProduct: function (id, updatedData) {
    let products = this.getAll();
    let index = products.findIndex((product) => product.id == id);
    products[index] = { ...products[index], ...updatedData };
    fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");
  },
  deleteProduct: function (id) {
    let filteredElements = this.getAll().filter((product) => product.id != id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(filteredElements),
      "utf-8"
    );
  },
  save: function (product) {
    this.getAll().push(product);
    fs.writeFileSync(
      path.resolve(__dirname, "../models/products.json"),
      JSON.stringify(products)
    );
    return "OK";
  },
};

module.exports = productService;
