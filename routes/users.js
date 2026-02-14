const express = require("express");

const { getAllUsers, getUser, createUser } = require("../controllers/users");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/", createUser);

module.exports = router;
