const express = require("express");
const indexRoutes = require("../src/routers/index.routes");
const productRoutes = require("../src/routers/product.routes");
const userRoutes = require("../src/routers/user.routes");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const recordameMiddleware = require("./middlewares/recordameMiddleware");

const app = express();

app.use((req, res, next) => {
  console.log("Solicitud recibida:", req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(recordameMiddleware);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));

app.use("/", indexRoutes);
app.use("/products", productRoutes);
app.use("/", userRoutes);

const port = 3030;
app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
