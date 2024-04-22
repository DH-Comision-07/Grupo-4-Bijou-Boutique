const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/cart", productController.cart);

router.get("/products", productController.products);

router.get("/products/:id/", productController.detail);

router.get("/create", productController.formulary);

router.get("/productCard", productController.productCard);

router.get("/products/:id/edit", productController.editForm);
router.put("/products/:id", productController.update);

router.delete("/:id", productController.destroy);

module.exports = router;
