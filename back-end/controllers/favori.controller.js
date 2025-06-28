// controllers/favori.controller.js
const Favori = require("../models/favori.model");

exports.getFavoris = async (req, res) => {
  try {
    const favoris = await Favori.getAllByUser(req.utilisateur.id);
    res.json(favoris);
  } catch (error) {
    console.log("ERREUR getFavoris:", error.message);
    res.status(500).json({ error: "Erreur lors de la récupération des favoris." });
  }
};

exports.ajouterFavori = async (req, res) => {
  const { id_mot } = req.body;
  try {
    console.log("=== DEBUG ===");
    console.log("req.utilisateur:", req.utilisateur);
    console.log("id_mot:", id_mot);
    
    await Favori.add(req.utilisateur.id, id_mot);
    res.status(201).json({ message: "Mot ajouté aux favoris" });
  } catch (error) {
    console.log("ERREUR ajouterFavori:", error.message);
    res.status(500).json({ error: "Erreur lors de l'ajout." });
  }
};

exports.updateDescription = async (req, res) => {
  const { description_perso } = req.body;
  const idMot = req.params.idMot;
  try {
    await Favori.updateDescription(req.utilisateur.id, idMot, description_perso);
    res.status(200).json({ message: "Description mise à jour." });
  } catch (error) {
    console.log("ERREUR updateDescription:", error.message);
    res.status(500).json({ error: "Erreur lors de la mise à jour." });
  }
};