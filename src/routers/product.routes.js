const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/productMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const productValidations = require("../middlewares/productValidationMiddleware");

// Rutas accesibles solo sin loguear
router.get("/cart", productController.cart);
router.get("/", productController.products);
router.get("/create", authMiddleware, productController.formulary);
router.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  productValidations,
  productController.create
);
router.get("/:id/edit", authMiddleware, productController.edit);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  productValidations,
  productController.update
);
router.get("/productCard", authMiddleware, productController.productCard);
router.delete("/:id", authMiddleware, productController.destroy);
router.get("/:id", productController.detail);

module.exports = router;
