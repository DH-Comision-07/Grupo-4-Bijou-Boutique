const { check } = require("express-validator");

const loginValidation = [
  check("email").isEmail().withMessage("Email inválido"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];

module.exports = {
  loginValidation,
};
