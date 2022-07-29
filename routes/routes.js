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

router.get("/users", getUsers);
router.post("/users", createUser);

router.get("/user/:id", getUserById);
router.put("/user/:id", editUser);

router.delete("/user/:id", deleteUser);

router.delete("/users/delete", deleteMutipleUsers);

module.exports = router;
