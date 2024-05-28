function checkLoggedIn(req, res, next) {
  if (req.session.usuarioLogueado == undefined) {
    res.send("No estas logueado");
  } else {
    res.send("El usuario logueado es " + req.session.usuarioLogueado.email);
  }
}

module.exports = {
  checkLoggedIn,
};
