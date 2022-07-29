const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
  },
  post_code: {
    type: Sequelize.STRING,
  },
  contact_number: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
});
module.exports = User;
