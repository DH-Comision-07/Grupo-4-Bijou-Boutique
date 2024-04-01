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
/* router.post("/create-product", upload.single('imagen'), productController.create); */

/*** NUESTRO ***/
router.get("/productCard", productController.productCard);

/*** UPDATE ONE PRODUCT ***/

/*** EDIT ONE PRODUCT ***/
router.get("/edit-form/:id/", productController.editForm);
router.put("/products/:id", productController.update);

/*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productController.destroy);

module.exports = router;
