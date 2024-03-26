const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.get("/cart", productController.cart);
router.get("/productCard", productController.productCard);
router.get("/productDetail", productController.productDetail);
router.get("/formulary", productController.formulary);

//  GET ONE PRODUCT

module.exports = router;
