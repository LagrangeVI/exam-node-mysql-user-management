const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  deleteMutipleUsers,
} = require("../controllers/user.controller");

router.get("/getAllUsers", getUsers);
router.post("/createUser", createUser);

router.get("/getUserByID/:id", getUserById);
router.put("/editUser/:id", editUser);

router.delete("/deleteUser/:id", deleteUser);

router.delete("/users/delete", deleteMutipleUsers);

module.exports = router;
