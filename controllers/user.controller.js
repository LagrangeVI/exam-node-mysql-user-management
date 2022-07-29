const User = require("../models/User");
const { Op } = require("sequelize");

exports.getUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.errors[0].message });
  }
};

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["password"],
      },
    });
    res.send(user[0]);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.errors[0].message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: "User Created",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: err.errors[0].message });
  }
};

// Edit user by id
exports.editUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Updated",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: err.errors[0].message });
  }
};

// Delete users by id
exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: err.errors[0].message });
  }
};
// Delete multiple users by id
exports.deleteMutipleUsers = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: [...req.body.ids],
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: err.errors[0].message });
  }
};
