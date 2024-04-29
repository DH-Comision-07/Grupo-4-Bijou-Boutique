const userService = require("../models/userService");
const userController = {
  login: (req, res) => {
    res.render("login");
  },
  processLogin: (req, res) => {
    const { email, password } = req.body;

    const user = userService.getUserByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.redirect("/login");
    } else {
      req.session.user = user;
      res.redirect("/");
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
