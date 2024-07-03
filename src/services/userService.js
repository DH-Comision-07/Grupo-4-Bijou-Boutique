const db = require("../database/models");
const bcrypt = require("bcryptjs");

const userService = {
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
