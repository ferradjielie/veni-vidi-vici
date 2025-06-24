const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Tes autres routes publiques ici (exemple: /api/themes/politique)

// Utilise les routes d'authentification
app.use('/api', authRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});
