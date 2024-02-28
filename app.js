const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3030;

app.listen(port, () =>
  console.log(`Proyecto corriendo exitosamente en puerto ${port}`)
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.use(express.static("public"));
