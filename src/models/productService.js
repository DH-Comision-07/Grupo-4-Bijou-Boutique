const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../models/data/products.json");
const productService = {
  getAll: function () {
    return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  },
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
};

module.exports = productService;
