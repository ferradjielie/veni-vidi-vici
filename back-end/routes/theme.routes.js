const express = require("express");
const router = express.Router();
const themeController = require("../controllers/theme.controller");

router.get("/themes/politique", themeController.getMotsPolitique);

module.exports = router;
