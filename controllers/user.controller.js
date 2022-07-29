const User = require("../models/User");

export const getUsers = async (req, res) => {
	try {
			const user = await User.findAll();
			res.send(user);
	} catch (err) {
			console.log(err);
	}
}

// Get user by id
export const getUserById = async (req, res) => {
	try {
			const user = await User.findAll({
					where: {
							id: req.params.id
					}
			});
			res.send(user[0]);
	} catch (err) {
			console.log(err);
	}
}

// Create a new user
export const createUser = async (req, res) => {
	try {
			await User.create(req.body);
			res.json({
					"message": "User Created"
			});
	} catch (err) {
			console.log(err);
	}
}

// Edit user by id
export const editUser = async (req, res) => {
	try {
			await User.update(req.body, {
					where: {
							id: req.params.id
					}
			});
			res.json({
					"message": "User Updated"
			});
	} catch (err) {
			console.log(err);
	}
}

// Delete users by id
export const deleteUsers = async (req, res) => {
	try {
			await User.destroy({
					where: {
							id: req.params.ids
					}
			});
			res.json({
					"message": "User Deleted"
			});
	} catch (err) {
			console.log(err);
	}
}