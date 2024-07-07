const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Multer storage destination");
    cb(null, "./public/images/users");
  },
  filename: (req, file, cb) => {
    const newFileName =
      "products-" + Date.now() + path.extname(file.originalname);
    console.log("Multer storage filename: ", newFileName);
    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  console.log("Multer file filter: ", file);
  const filetypes = /jpeg|jpg|png|gif/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error("Error: Archivo debe ser una imagen válida"));
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = upload;
