const express = require("express");
const indexRoutes = require("../src/routers/index.routes");
const productRoutes = require("../src/routers/product.routes");
const userRoutes = require("../src/routers/user.routes");

const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "..", "public")));

app.set("view engine", "ejs");

app.use("/", indexRoutes);
app.use("/", productRoutes);
app.use("/", userRoutes);

const port = 3030;
app.listen(port, (req, res) => console.log(`http://localhost:${port}`));
