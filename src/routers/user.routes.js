const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/productMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");

router.get("/login", guestMiddleware, userController.login);
router.get("/success", userController.success);
router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Email inválido"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres"),
  ],
  userController.processLogin
);
router.get("/check", function (req, res) {
  if (req.session.usuarioLogueado == undefined) {
    res.send("No estas logueado");
  } else {
    res.send("El usuario logueado es " + req.session.usuarioLogueado.email);
  }
});

// Rutas accesibles solo sin loguear
router.post("/", upload.single("users-image"), userController.store);
router.get("/register", guestMiddleware, userController.register);

router.get("/contactUs", userController.contact);
router.get("/create/", userController.create);

module.exports = router;
