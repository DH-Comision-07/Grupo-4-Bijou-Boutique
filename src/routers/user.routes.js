const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/productMiddleware");

router.get("/login", userController.login);
router.post("/login", userController.processLogin);
router.get("/register", userController.register);
router.get("/contactUs", userController.contact);
router.get("/create/", userController.create);
router.post("/", upload.single("users-image"), userController.store);

module.exports = router;
