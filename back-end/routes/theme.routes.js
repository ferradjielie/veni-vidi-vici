// routes/themes.routes.js
const express = require("express");
const router = express.Router();
const themeController = require("../controllers/theme.controller");
const verifierToken = require("../middleware/auth.middleware");

// ✅ Route protégée par le middleware
router.get("/politique", verifierToken, themeController.getMotsPolitique);

module.exports = router;
