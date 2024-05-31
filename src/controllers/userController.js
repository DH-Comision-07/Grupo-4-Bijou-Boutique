const userService = require("../services/userService");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const userController = {
  login: (req, res) => {
    return res.render("login");
  },
  processLogin: async (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let user = await userService.getUserByEmail(req.body.email);

      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        req.session.usuarioLogueado = user;

        if (req.body.recordame === "recordar") {
          res.cookie("recordame", user.email, { maxAge: 600000 });
        }

        return res.redirect("/success");
      } else {
        return res.render("login", {
          errors: [{ msg: "Credenciales inválidas!" }],
        });
      }
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },
  perfil: (req, res) => {
    const user = req.session.usuarioLogueado;
    if (!user) {
      return res.redirect("/login");
    }

    return res.render("home", { user });
  },
  success: function (req, res) {
    res.render("success");
  },
  register: (req, res) => {
    return res.render("register");
  },
  create: async (req, res) => {
    try {
      let imageName = req.file ? req.file.filename : null;

      await userService.save({
        name: req.body.name,
        surname: req.body.surname,
        password: req.body.password,
        email: req.body.email,
        image: imageName,
      });

      res.redirect("/login");
    } catch (error) {
      console.error(error);
      res.render("register", {
        errors: [{ msg: "Error al crear el usuario" }],
      });
    }
  },
  contact: (req, res) => {
    return res.render("contactUs");
  },
  maps: (req, res) => {
    return res.render("maps");
  },
  profile: function (req, res) {
    res.render("profile");
  },
  updatePass: function (req, res) {
    res.render("updatePass");
  },
};

module.exports = userController;
