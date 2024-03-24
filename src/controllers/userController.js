const userService = require("../models/userService");

const userController = {
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  userCard: (req, res) => {
    res.render("userCard", { users : userService.getAll()});
  },
  create:  (req, res) => {
		res.render('register/create');
	},
  store: (req, res) => {
		userService.save(req.body);
		res.send(req.body);
    res.redirect('/login')
	},
};

module.exports = userController;
