const fs = require("fs");
const path = require("path");
const users = require("../models/data/users.json");

const userService = {
  users: users,
  getAll: function () {
    return this.users;
  },
  getOne: function (id) {
    return this.users.find((user) => user.id == id);
  },
  save: function (user) {
    this.users.push(user);
    fs.writeFileSync(
      path.resolve(__dirname, "../models/data/users.json"),
      JSON.stringify(users)
    );
  },
};

module.exports = userService;
