// models/favori.model.js
const db = require('../db')

const Favori = {
  getAllByUser: (userId) => {
    const sql = `
      SELECT m.id_mot, m.terme, m.etymologie, m.contexte, f.description_perso
      FROM Favori f
      JOIN Mot m ON f.id_mot = m.id_mot
      WHERE f.id_user = ?
    `;
    return new Promise((resolve, reject) => {
      db.query(sql, [userId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  add: (userId, motId) => {
    const sql = `INSERT IGNORE INTO Favori (id_user, id_mot) VALUES (?, ?)`;
    return new Promise((resolve, reject) => {
      db.query(sql, [userId, motId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  updateDescription: (userId, motId, description) => {
    const sql = `UPDATE Favori SET description_perso = ? WHERE id_user = ? AND id_mot = ?`;
    return new Promise((resolve, reject) => {
      db.query(sql, [description, userId, motId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
};

module.exports = Favori;
