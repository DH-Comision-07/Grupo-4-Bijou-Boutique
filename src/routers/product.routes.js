const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/cart", productController.cart);

/*** GET ALL PRODUCTS ***/
router.get("/products", productController.products);

/*** GET ONE PRODUCT ***/
router.get("/products/:id/", productController.detail);

/*** CREATE PRODUCT ***/
router.get("/create", productController.formulary);

/*** NUESTRO ***/
router.get("/productCard", productController.productCard);

/*** EDIT ONE PRODUCT ***/
router.get("/products/:id/edit", productController.editForm);
router.put("/:id", productController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productController.destroy);

//  GET ONE PRODUCT
// router.get("/:id/", productController.detail);

module.exports = router;
