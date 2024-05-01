const userService = require("../models/userService");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const userController = {
  login: (req, res) => {
    return res.render("login");
  },
  processLogin: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let usersJSON = fs.readFileSync("src/models/data/users.json", {
        encoding: "utf-8",
      });
      let users;
      if (usersJSON == "") {
        users = [];
      } else {
        users = JSON.parse(usersJSON);
      }

      let usuarioALoguearse;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.password, users[i].password)) {
            usuarioALoguearse = users[i];
            break;
          }
        }
      }

      if (usuarioALoguearse == undefined) {
        return res.render("login", {
          errors: [{ msg: "Credenciales inválidas!" }],
        });
      }

      req.session.usuarioLogueado = usuarioALoguearse;

      if (req.body.recordame === "recordar") {
        res.cookie("recordame", usuarioALoguearse.email, { maxAge: 60000 });
      }

      return res.redirect("/success");
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
  create: (req, res) => {
    return res.render("register/create");
  },
  store: (req, res) => {
    userService.save(req.body);
    return res.redirect("/login");
  },
  contact: (req, res) => {
    return res.render("contactUs");
  },
};

module.exports = userController;
