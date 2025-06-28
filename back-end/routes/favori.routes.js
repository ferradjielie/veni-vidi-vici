const express = require("express");
const router = express.Router();
const favoriController = require("../controllers/favori.controller");
const auth = require("../middleware/auth.middleware");

router.get("/favoris", auth, favoriController.getFavoris);
router.post("/favoris", auth, favoriController.ajouterFavori);
router.put("/favoris/:id_mot", authMiddleware, async (req, res) => {
  const id_mot = req.params.id_mot;
  const { notes } = req.body; // <- on récupère 'notes' ici
  const id_utilisateur = req.user.id; // injecté via authMiddleware

  try {
    const [result] = await db.execute(
      `UPDATE favori SET notes = ? WHERE id_utilisateur = ? AND id_mot = ?`,
      [notes, id_utilisateur, id_mot]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Favori non trouvé." });
    }

    res.json({ message: "Notes mises à jour avec succès." });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
});


module.exports = router;
