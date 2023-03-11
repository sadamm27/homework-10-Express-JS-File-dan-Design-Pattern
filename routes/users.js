const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js")

router.get("/users", userController.findUsers);
router.get("/users/:id", userController.findById);
router.post("/users", userController.createUser);
router.put("/users:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
module.exports = router;