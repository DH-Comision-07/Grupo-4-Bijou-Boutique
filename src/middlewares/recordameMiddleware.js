const db = require("../database/models");

async function recordameMiddleware(req, res, next) {
  if (req.cookies.recordame != undefined && req.session.user == undefined) {
    try {
      const user = await db.User.findOne({
        where: { email: req.cookies.recordame },
      });
      if (user) {
        req.session.user = user;
      }
    } catch (error) {
      console.error(
        "Error al buscar el usuario en la base de datos:",
        error.message
      );
    }
  }
  next();
}

module.exports = recordameMiddleware;
