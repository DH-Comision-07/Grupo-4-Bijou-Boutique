const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.login);
router.get("/register", userController.register);

router.get("/userCard", userController.userCard);

router.get('/create/', userController.create); 
router.post('/', userController.store);

module.exports = router;
