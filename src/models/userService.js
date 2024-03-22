const fs = require("fs");
const path = require("path");
const users = require("../models/users.json");

const userService = {
  users: users,
  getAll: function () {
    return this.users;
  },
  getOne: function (id) {
    return this.users.find((user) => user.id == id);
  },
};

module.exports = userService;


