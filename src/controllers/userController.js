const userController = {
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  create:  (req, res) => {
		res.render('register/create');
	},
  store: (req, res) => {
		userService.save(req.body);
	//	res.send(req.body);
    res.redirect('/login');
	},
};

module.exports = userController;