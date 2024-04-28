const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require("../controllers/userController");
const storage = multer.diskStorage({
    destination: (req, file,cb) => {
        cb(null,'./public/images/users')
    },
    filename: (req,file,cb) => {
        const newFileName = 'users-' + Date.now() + path.extname(file.originalname);
        cb(null,newFileName)
    }
});

const upload = multer({storage:storage})
router.get("/login", userController.login);
router.get("/register", userController.register);
router.get("/contact_us", userController.contact)
router.get('/create/', userController.create); 
router.post('/', upload.single('users-image'),userController.store);

module.exports = router;