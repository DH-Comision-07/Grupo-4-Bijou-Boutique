const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3030;

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

app.listen(port, () =>
  console.log(`Proyecto corriendo exitosamente en puerto ${port}`)
);