const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/cart", productController.cart);
router.get("/products", productController.products);
router.get("/productCard", productController.productCard);
router.get("/products/:id/", productController.detail);
router.get("/formulary", productController.formulary);
router.get("/edit-form", productController.editForm);

//  GET ONE PRODUCT
// router.get("/:id/", productController.detail);

module.exports = router;
