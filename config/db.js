const Sequelize = require("sequelize");

const sequelize = new Sequelize("user_management", "root", "pass", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
});

module.exports = sequelize;
