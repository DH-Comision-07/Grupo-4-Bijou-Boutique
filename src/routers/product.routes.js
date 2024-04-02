const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/cart", productController.cart);

/*** GET ALL PRODUCTS ***/
router.get("/products", productController.products);

/*** GET ONE PRODUCT ***/
router.get("/products/:id/", productController.detail);

/*** CREATE PRODUCT ***/
router.get("/formulary", productController.formulary);

/*** NUESTRO ***/
router.get("/productCard", productController.productCard);

/*** UPDATE ONE PRODUCT ***/

/*** EDIT ONE PRODUCT ***/
router.put("/:id", productController.update);
router.get("/edit-form", productController.editForm);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productController.destroy);

//  GET ONE PRODUCT
// router.get("/:id/", productController.detail);

module.exports = router;
