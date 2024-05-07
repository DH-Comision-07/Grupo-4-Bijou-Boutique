require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DV_USERS,
    password: process.env.DV_PASSWORD,
    database: process.env.DV_NAME,
    host: process.env.DV_PORT,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
