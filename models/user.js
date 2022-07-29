const { DataTypes } = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  post_code: {
    type: DataTypes.STRING,
  },
  contact_number: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
});
module.exports = User;
