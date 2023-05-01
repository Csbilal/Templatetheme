// routes/profileRoutes.js

const express = require("express");
const router = express.Router();
const profileController = require("../controller/profileController");

// Route for creating a new profile
router.post("/profile", profileController.createProfile);

module.exports = router;
