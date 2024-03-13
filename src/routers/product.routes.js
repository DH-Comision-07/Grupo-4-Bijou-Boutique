const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.carrito);
router.get("/", productController.productDetail);
router.get("/", productController.formulario);

module.exports = productController;
