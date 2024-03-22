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
};

module.exports = userController;
