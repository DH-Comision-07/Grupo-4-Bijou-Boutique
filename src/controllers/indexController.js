const indexController = {
  index: (req, res) => {
    res.render("home");
  },
  aboutUs: (req, res) => {
    res.render("aboutUs");
  },
};

module.exports = indexController;
