const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userController");
const upload = require("../middlewares/productMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const { loginValidation } = require("../middlewares/loginValidMiddleware");
const { checkLoggedIn } = require("../middlewares/sessionMiddleware");

const validations = [
  body("name").notEmpty().withMessage("Debes escribir tu nombre"),
  body("surname").notEmpty().withMessage("Debes escribir tu apellido"),
  body("password").notEmpty().withMessage("Debes escribir tu contraseña"),
  body("email").notEmpty().withMessage("Debes escribir tu email"),
];

router.get(
  "/login",
  guestMiddleware,
  upload.single("image"),
  userController.login
);
router.get("/success", userController.success);
router.post("/login", loginValidation, userController.processLogin);
router.get("/check", checkLoggedIn);
router.get("/profile", userController.profile);
router.get("/updatePass", userController.updatePass);

// Rutas accesibles solo sin loguear
router.get("/register", guestMiddleware, userController.register);
router.get("/contactUs", userController.contact);
router.get("/register", userController.register);
router.post(
  "/register",
  upload.single("image"),
  validations,
  userController.processRegister
);
router.get("/maps", userController.maps);

module.exports = router;