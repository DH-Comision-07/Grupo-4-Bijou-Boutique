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
  editProduct: function (id, updatedData) {
    let index = this.products.findIndex((product) => product.id == id);
    this.products[index] = { ...this.products[index], ...updatedData };
    fs.writeFileSync(productsFilePath, JSON.stringify(this.products), "utf-8");
  },
  deleteProduct: function (id) {
    let filteredElements = this.products.filter((product) => product.id != id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(filteredElements),
      "utf-8"
    );
  },
  save:function (product){
    this.products.push(product);
        fs.writeFileSync(path.resolve(__dirname,'../models/products.json'),JSON.stringify(products));
        return "OK"
  }
};

module.exports = productService;

