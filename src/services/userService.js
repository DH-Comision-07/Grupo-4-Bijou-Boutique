const fs = require("fs");
const path = require("path");
const users = require("../services/data/users.json");
const bcrypt = require("bcryptjs");

const userService = {
  users: users,
  getAll: function () {
    return this.users;
  },
  getOne: function (id) {
    return this.users.find((user) => user.id == id);
  },
  save: function (user) {
    let contraseñaEncriptada = bcrypt.hashSync(user.password, 10);
    let usuarioContraseñaEncriptada = {
      ...user,
      password: contraseñaEncriptada,
    };
    users.push(usuarioContraseñaEncriptada);
    fs.writeFileSync(
      path.resolve(__dirname, "../models/data/users.json"),
      JSON.stringify(users)
    );
  },
  getUserByEmail: function (email) {
    return this.users.find((user) => user.email === email);
  },
};

module.exports = userService;
