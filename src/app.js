const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
});

const port = 3030;
app.listen(port, (req,res) => console.log(`http://localhost:${port}`));


