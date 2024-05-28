const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../services/data/products.json");
const productService = {
  getOne: function (id) {
    return this.getAll().find((product) => product.id == id);
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
