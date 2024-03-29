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
};

module.exports = productService;
