const { check, validationResult } = require("express-validator");

const passwordValidation = [
  check("currentPassword")
    .notEmpty()
    .withMessage("Debes ingresar tu contraseña actual."),
  check("newPassword")
    .isLength({ min: 6 })
    .withMessage("La nueva contraseña debe tener al menos 6 caracteres."),
  check("confirmPassword")
    .notEmpty()
    .withMessage("Debes confirmar tu nueva contraseña.")
    .custom((value, { req }) => value === req.body.newPassword)
    .withMessage("La confirmación de la nueva contraseña no coincide."),
];

module.exports = { passwordValidation };
