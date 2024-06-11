const { body } = require("express-validator");
const path = require("path");

const productValidations = [
  body("name").notEmpty().withMessage("Debes escribir el nombre del producto"),
  body("description")
    .notEmpty()
    .withMessage("Debes escribir una descripción del producto"),
  body("price")
    .notEmpty()
    .withMessage("Debes escribir el precio del producto")
    .bail()
    .isFloat({ min: 0 })
    .withMessage("El precio debe ser un número positivo"),
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

module.exports = productValidations;
