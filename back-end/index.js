require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Import du routeur principal
const apiRoutes = require('./routes/index');
app.use('/api', apiRoutes);

// Route racine test (facultative)
app.get('/', (req, res) => {
  res.send('API Veni Vidi Vici en ligne ✅');
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});
