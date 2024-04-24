const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/users");
  },
  filename: (req, file, cb) => {
    const newFileName = "users-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const userMiddleware = multer({ storage: storage });

module.exports = userMiddleware;
