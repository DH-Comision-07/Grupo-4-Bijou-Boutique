const userService = require("../models/userService");
const bcrypt = require("bcryptjs");
const userController = {
  login: (req, res) => {
    res.render("login");
  },
  processLogin: (req, res) => {
    const { email, password } = req.body;

    const user = userService.getUserByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.render("login", { error: "Usuario o contraseña incorrectos" });
    } else {
      req.session.user = user;
      return res.render("perfil");
    }
  },
  perfil: (req, res) => {
    const user = req.session.user;
    if (!user) {
      return res.redirect("/login");
    }

    res.render("home", { user });
  },
  register: (req, res) => {
    res.render("register");
  },
  create: (req, res) => {
    res.render("register/create");
  },
  store: (req, res) => {
    userService.save(req.body);
    //	res.send(req.body);
    res.redirect("/login");
  },
  contact: (req, res) => {
    res.render("contactUs");
  },
};

module.exports = userController;
