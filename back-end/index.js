// back-end/index.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); // ← la connexion est lancée ici

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('API Veni Vidi Vici en ligne ✅');
});

app.get('/api/themes/politique', (req, res) => {
  const sql = 'SELECT * FROM Mot WHERE id_theme = ?';
  const politiqueId = 1; // met ici l'id du thème politique dans ta bdd

  db.query(sql, [politiqueId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});
