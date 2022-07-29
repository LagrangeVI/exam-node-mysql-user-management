const Sequelize = require("sequelize");

const sequelize = new Sequelize("user_management", "root", "pass", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 4000,
  }
});

module.exports = sequelize;
