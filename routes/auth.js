const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in  users
// @access  Private

router.get("/", (req, res) => {
	res.send("Get logged in User");
});

// @route   POST api/auth
// @desc    AUth user and get token
// @access  Public

router.post("/", (req, res) => {
	res.send("Log in user");
});

module.exports = router;
