const fs = require("fs");
const path = require("path");

function recordameMiddleware(req, res, next) {
  if (req.cookies.recordame != undefined && req.session.user == undefined) {
    let users = [];
    try {
      const usersFilePath = path.join(__dirname, "../images/users");
      const usersJSON = fs.readFileSync(usersFilePath, {
        encoding: "utf-8",
      });
      if (usersJSON) {
        users = JSON.parse(usersJSON);
      }
    } catch (error) {
      console.error("Error al leer el archivo de usuarios:", error.message);
    }

    const usuarioALoguearse = users.find(
      (user) => user.email === req.cookies.recordame
    );
    if (usuarioALoguearse) {
      req.session.user = usuarioALoguearse;
    }
  }
  next();
}

module.exports = recordameMiddleware;
