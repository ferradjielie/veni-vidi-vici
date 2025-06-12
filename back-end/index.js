// back-end/index.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); // ← la connexion est lancée ici

const app = express();
const PORT = 3306;

app.use(cors());
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('API Veni Vidi Vici en ligne ✅');
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});
