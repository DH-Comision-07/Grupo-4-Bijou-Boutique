const fs = require("fs");
const path = require("path");
const users = require("../models/users.json");

const userService = {
  users: users,
  
  save:function(user){
    this.users.push(user);
    fs.writeFileSync(path.resolve(__dirname,'../models/users.json'),JSON.stringify(users));
},
}

module.exports = userService;


