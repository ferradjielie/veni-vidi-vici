// models/favori.model.js
const db = require('../db')

const Favori = {
  getAllByUser: (userId) => {
    const sql = `
      SELECT m.id_mot, m.terme, m.etymologie, m.contexte, f.notes
      FROM favori f
      JOIN mot m ON f.id_mot = m.id_mot
      WHERE f.id_utilisateur = ?
    `;
    return new Promise((resolve, reject) => {
      db.query(sql, [userId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  add: (userId, motId) => {
    const sql = `INSERT IGNORE INTO favori (id_utilisateur, id_mot) VALUES (?, ?)`;
    return new Promise((resolve, reject) => {
      db.query(sql, [userId, motId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  updateDescription: (userId, motId, description) => {
    const sql = `UPDATE favori SET notes = ? WHERE id_utilisateur = ? AND id_mot = ?`;
    return new Promise((resolve, reject) => {
      db.query(sql, [description, userId, motId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
};

module.exports = Favori;