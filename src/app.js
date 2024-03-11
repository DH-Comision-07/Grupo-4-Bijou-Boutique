const express = require("express");
const homeRoutes = require("../src/routers/home.routes");
const carritoRoutes = require("../src/routers/carrito.routes");
const productRoutes = require("../src/routers/productDetail.routes");
const loginRoutes = require("../src/routers/login.routes");
const registerRoutes = require("../src/routers/register.routes");

const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('view engine', 'ejs');

app.use("/", homeRoutes);
app.use("/carrito", carritoRoutes);
app.use("/productDetail", productRoutes);
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);

const port = 3030;
app.listen(port, (req, res) => console.log(`http://localhost:${port}`));
