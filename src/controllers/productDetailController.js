const path = require("path");

const productDetailController = {
  productDetail: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/productDetail.ejs"));
  },
};

module.exports = productDetailController;
