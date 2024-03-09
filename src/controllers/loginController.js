const path = require("path");

const loginController = {
  login: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/login.ejs"));
  },
};

module.exports = loginController;
