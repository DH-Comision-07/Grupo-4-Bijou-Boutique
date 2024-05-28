const db = require("../database/models");
const bcrypt = require("bcryptjs");

const userService = {
  getAll: async function () {
    return await db.User.findAll();
  },
  getOne: async function (id) {
    return await db.User.findByPk(id);
  },
  save: async function (user) {
    let contraseñaEncriptada = bcrypt.hashSync(user.password, 10);
    let usuarioContraseñaEncriptada = {
      ...user,
      password: contraseñaEncriptada,
    };
    return await db.User.create(usuarioContraseñaEncriptada);
  },
  getUserByEmail: async function (email) {
    return await db.User.findOne({ where: { email: email } });
  },
};

module.exports = userService;
