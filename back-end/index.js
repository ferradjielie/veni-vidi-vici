const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const themeRoutes = require('./routes/theme.routes'); 
const favoriRoutes = require("./routes/favori.routes");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', themeRoutes); 
app.use("/api", favoriRoutes); 

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
}); 
