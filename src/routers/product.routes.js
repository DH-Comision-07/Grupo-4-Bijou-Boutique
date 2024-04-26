const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlerwares/productMiddleware");

router.get("/cart", productController.cart);
router.get("/", productController.products);
router.get("/create", productController.formulary);
router.post("/", upload.single("image"), productController.store);
router.get("/:id/edit", productController.editForm);
router.put("/:id", productController.update);
router.get("/productCard", productController.productCard);
router.delete("/:id", productController.destroy);
router.get("/:id", productController.detail);

module.exports = router;
