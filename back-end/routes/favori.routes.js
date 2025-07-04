// favori.routes.js
const express = require("express");
const router = express.Router();
const favoriController = require("../controllers/favori.controller");
const Favori = require("../models/favori.model"); // ← Importe le model
const auth = require("../middleware/auth.middleware");


router.get("/favoris", auth, favoriController.getFavoris);
router.post("/favoris", auth, favoriController.ajouterFavori);

router.put("/favoris/:id_mot", auth, async (req, res) => {
  const id_mot = req.params.id_mot;
  const { notes } = req.body;
  const id_utilisateur = req.utilisateur.id;

  try {
    const result = await Favori.updateDescription(id_utilisateur, id_mot, notes);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Favori non trouvé." });
    }

    res.json({ message: "Notes mises à jour avec succès." });
  } 
  
  catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
});

module.exports = router;