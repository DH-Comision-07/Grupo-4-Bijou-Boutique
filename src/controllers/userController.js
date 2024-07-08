const userService = require("../services/userService");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const userController = {
  login: (req, res) => {
    res.render("login", {
      user: req.session.usuarioLogueado,
    });
  },
  processLogin: async (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let user = await userService.getUserByEmail(req.body.email);

      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        req.session.usuarioLogueado = user;

        if (req.body.recordame === "recordar") {
          res.cookie("recordame", user.email, { maxAge: 600000 });
        }

        return res.redirect("/success");
      } else {
        return res.render("login", {
          errors: [{ msg: "Credenciales inválidas!" }],
          user: null, // Asegúrate de pasar user
        });
      }
    } else {
      return res.render("login", { errors: errors.errors, user: null }); // Asegúrate de pasar user
    }
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("No se pudo cerrar sesión");
      }
      res.clearCookie("recordame");
      return res.redirect("/login");
    });
  },
  perfil: (req, res) => {
    const user = req.session.usuarioLogueado;
    if (!user) {
      return res.redirect("/login");
    }

    return res.render("home", { user });
  },
  success: function (req, res) {
    res.render("success", {
      user: req.session.usuarioLogueado,
    });
  },
  register: (req, res) => {
    return res.render("register", { errors: validationResult, user: null });
  },
  create: async (req, res) => {
    const resultValidations = validationResult(req);

    if (resultValidations.errors.length > 0) {
      return res.render("register", {
        errors: resultValidations.mapped(),
        oldData: req.body,
        user: null,
      });
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    try {
      const newUser = await db.User.create({
        name: req.body.name,
        surname: req.body.surname,
        password: hashedPassword,
        email: req.body.email,
        image: req.file ? req.file.filename : null,
        role: req.body.role,
      });

      res.redirect("/login");
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message });
    }
  },
  contact: (req, res) => {
    return res.render("contactUs", { user: req.session.usuarioLogueado });
  },
  profile: (req, res) => {
    const user = req.session.usuarioLogueado;
    if (!user) {
      return res.redirect("/login");
    }
    return res.render("profile", { user });
  },
  editProfile: (req, res) => {
    const user = req.session.usuarioLogueado;
    if (!user) {
      return res.redirect("/login");
    }
    return res.render("editProfile", { user });
  },

  updateProfile: async (req, res) => {
    const user = req.session.usuarioLogueado;
    if (!user) {
      return res.redirect("/login");
    }

    const { name, surname, email, role } = req.body;

    try {
      await db.User.update(
        { name, surname, email, role },
        { where: { id: user.id } }
      );

      req.session.usuarioLogueado.name = name;
      req.session.usuarioLogueado.surname = surname;
      req.session.usuarioLogueado.email = email;
      req.session.usuarioLogueado.role = role;

      return res.redirect("/profile");
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message });
    }
  },
  updatePass: function (req, res) {
    return res.render("updatePass", { user: req.session.usuarioLogueado });
  },
};

module.exports = userController;
