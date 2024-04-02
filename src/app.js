const express = require("express");
const indexRoutes = require("../src/routers/index.routes");
const productRoutes = require("../src/routers/product.routes");
const userRoutes = require("../src/routers/user.routes");
const path = require("path");
const methodOverride = require('method-override');
const multer = require('multer');
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/products');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); 
    }
  });

const app = express();
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, "..", "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRoutes);
app.use("/", productRoutes);
app.use("/", userRoutes);

const port = 3030;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
