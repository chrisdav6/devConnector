const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load User and Profile models
const User = require("../../models/User");
const Profile = require("../../models/Profile");

// @route   GET api/profile/test
// @desc    Test profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile" }));

module.exports = router;
