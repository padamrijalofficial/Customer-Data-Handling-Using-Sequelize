const Sequelize = require("sequelize");

const sequelize = new Sequelize("testdb", "manoj", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
