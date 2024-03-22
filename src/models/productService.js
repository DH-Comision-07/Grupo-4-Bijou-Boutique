const fs = require("fs");
const path = require("path");
const product = require("../models/products.json");

const productService = {
  products: product,
  getAll: function () {
    return this.products;
  },
  getOne: function (id) {
    return this.products.find((product) => product.id == id);
  },
};

module.exports = productService;
