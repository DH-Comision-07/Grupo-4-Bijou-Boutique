const { body } = require("express-validator");
const path = require("path");

const validations = [
  body("name").notEmpty().withMessage("Debes escribir tu nombre"),
  body("surname").notEmpty().withMessage("Debes escribir tu apellido"),
  body("password").notEmpty().withMessage("Debes escribir tu contraseña"),
  body("email")
    .notEmpty()
    .withMessage("Debes escribir tu email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo electronico"),
  body("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];
    if (!file) {
      throw new Error("Tienes que subir una imagen!!");
    } else {
      let fileExtensions = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtensions)) {
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];

module.exports = validations;
