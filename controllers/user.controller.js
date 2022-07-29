const User = require("../models/User");
const { Op } = require("sequelize");

exports.getUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.send({...user});
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.errors[0].message });
  }
};

// Get user by id
exports.getUserById = async (req, res) => {
  if (Number.isInteger(parseInt(req.params.id)) == false)
    res.status(400).json({ error: "id must be a number" });

  try {
    const user = await User.findAll({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ["password"],
      },
    });
    res.send({...user[0]});
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
  if (Number.isInteger(parseInt(req.params.id)) == false)
    res.status(400).json({ error: "id must be a number" });

  try {
    await User.update(req.body, {
      where: {
        id: Number(req.params.id),
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
	if (Number.isInteger(parseInt(req.params.id)) == false)
		res.status(400).json({ error: "id must be a number" });

  try {
    await User.destroy({
      where: {
        id: parseInt(req.params.id),
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
    if (Array.isArray(req.body.id) == false)
      res.status(400).json({ error: "id must be an array of id" });

    await User.destroy({
      where: {
        id: [...req.body.id],
      },
    });
    res.json({
      message: "User/s Deleted",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: err.errors[0].message });
  }
};
