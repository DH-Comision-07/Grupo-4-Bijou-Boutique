const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require("../controllers/userController");
const storage = multer.diskStorage({
    destination: (req, file,cb) => {
        cb(null,path.join(__dirname,'../images/users'))
    },
    filename: (req,file,cb) => {
        const newFileName = 'users-' + Date.now() + path.extname(file.originalname);
        cb(null,newFileName)
    }
});

const upload = multer({storage:storage})
router.get("/login", userController.login);
router.get("/register", userController.register);

router.get("/userCard", userController.userCard);

router.get('/create/', userController.create); 
router.post('/', upload.single('users-image'),userController.store);

module.exports = router;
