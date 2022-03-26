const express = require("express");
const router = express.Router();

const { getUsers, postUser } = require("../controllers/user");

// GET all Users
router.get("/", getUsers);

// INSERT A User

router.post("/", postUser);

module.exports = router;
