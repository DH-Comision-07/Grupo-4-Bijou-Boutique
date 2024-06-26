function guestMiddleware(req, res, next) {
  if (req.session.usuarioLogueado == undefined) {
    next();
  } else {
    res.render("validation");
  }
}

module.exports = guestMiddleware;
