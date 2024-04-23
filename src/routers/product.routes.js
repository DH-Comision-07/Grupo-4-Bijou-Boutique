const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require("../controllers/productController");
const storage = multer.diskStorage({
    destination: (req, file,cb) => {
        cb(null,'./public/images/products')
    },
    filename: (req,file,cb) => {
        const newFileName = 'products-' + Date.now() + path.extname(file.originalname);
        cb(null,newFileName)
    }
});  
const upload = multer({storage:storage});

router.get("/cart", productController.cart);

router.get("/products", productController.products);

router.get("/products/:id/", productController.detail);

router.get("/create", productController.formulary);

router.post('/',upload.single('imagen'),productController.store);

router.get("/productCard", productController.productCard);

router.get("/products/:id/edit", productController.editForm);
router.put("/products/:id", productController.update);

router.delete("/delete/:id", productController.destroy);

module.exports = router;