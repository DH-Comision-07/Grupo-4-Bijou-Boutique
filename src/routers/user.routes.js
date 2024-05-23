const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/productMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const { loginValidation } = require("../middlewares/loginValidMiddleware");
const { checkLoggedIn } = require("../middlewares/sessionMiddleware");

router.get("/login", guestMiddleware, userController.login);
router.get("/success", userController.success);
router.post("/login", loginValidation, userController.processLogin);
router.get("/check", checkLoggedIn);

// Rutas accesibles solo sin loguear
router.post("/", upload.single("users-image"), userController.store);
router.get("/register", guestMiddleware, userController.register);

router.get("/contactUs", userController.contact);
router.get("/create/", userController.create);
router.get("/maps", userController.maps);

module.exports = router;
