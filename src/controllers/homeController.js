const path = require("path");

const homeController = {
  home: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/home.ejs"));
  },
};

module.exports = homeController;
