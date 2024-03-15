const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/carrito", productController.carrito);
router.get("/productDetail", productController.productDetail);
router.get("/formulario", productController.formulario);

module.exports = router;
