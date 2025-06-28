// theme.controller.js
const db = require("../db");

exports.getMotsPolitique = (req, res) => {
  const sql = `
    SELECT * FROM mot 
    WHERE id_theme = (
      SELECT id_theme FROM theme WHERE theme = 'Politique'
    )
  `;
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erreur SQL :", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(results);
  });
};