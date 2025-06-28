// controllers/favori.controller.js
const Favori = require("../models/favori.model");

exports.getFavoris = async (req, res) => {
  try {
    const favoris = await Favori.getAllByUser(req.user.id_user);
    res.json(favoris);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des favoris." });
  }
};

exports.ajouterFavori = async (req, res) => {
  const { id_mot } = req.body;
  try {
    await Favori.add(req.user.id_user, id_mot);
    res.status(201).json({ message: "Mot ajouté aux favoris" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'ajout." });
  }
};

exports.updateDescription = async (req, res) => {
  const { description_perso } = req.body;
  const idMot = req.params.idMot;
  try {
    await Favori.updateDescription(req.user.id_user, idMot, description_perso);
    res.status(200).json({ message: "Description mise à jour." });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour." });
  }
};
