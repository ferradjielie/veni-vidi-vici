const express = require("express");
const router = express.Router();
const favoriController = require("../controllers/favori.controller");
const auth = require("../middleware/auth.middleware");

router.get("/favoris", auth, favoriController.getFavoris);
router.post("/favoris", auth, favoriController.ajouterFavori);
router.put("/favoris/:idMot", auth, favoriController.updateDescription);

module.exports = router;
