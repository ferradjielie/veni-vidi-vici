// back-end/index.js
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db'); // ← la connexion est lancée ici

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Fonction de validation de mot de passe (CNIL)
function motDePasseValide(mdp) {
  // Doit contenir au moins 14 caractères, une majuscule, une minuscule et un chiffre
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{14,}$/;
  return regex.test(mdp);
}

// Route test
app.get('/', (req, res) => {
  res.send('API Veni Vidi Vici en ligne ✅');
});

// Route pour récupérer les mots du thème Politique
app.get('/api/themes/politique', (req, res) => {
  const sql = 'SELECT * FROM Mot WHERE id_theme = ?';
  const politiqueId = 1;

  db.query(sql, [politiqueId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(results);
  });
});

// Route inscription
app.post('/api/inscription', (req, res) => {
  const { email, motDePasse } = req.body;
  const role = 'utilisateur'; // rôle par défaut

  if (!email || !motDePasse) {
    return res.status(400).json({ error: 'Email et mot de passe sont requis' });
  }

  // ✅ Validation CNIL
  if (!motDePasseValide(motDePasse)) {
    return res.status(400).json({
      error: 'Le mot de passe doit contenir au minimum 14 caractères, une majuscule, une minuscule et un chiffre.',
    });
  }

  bcrypt.hash(motDePasse, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Erreur hash mot de passe :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    const sql = 'INSERT INTO Utilisateur (email, mot_de_passe, role) VALUES (?, ?, ?)';
    db.query(sql, [email, hashedPassword, role], (err, result) => {
      if (err) {
        console.error('Erreur insertion utilisateur :', err);
        return res.status(500).json({ error: 'Erreur lors de la création du compte' });
      }
      res.status(201).json({ message: 'Utilisateur créé avec succès' });
    });
  });
});

// Route connexion
app.post('/api/connexion', (req, res) => {
  const { email, motDePasse } = req.body;

  if (!email || !motDePasse) {
    return res.status(400).json({ error: 'Email et mot de passe sont requis' });
  }

  const sql = 'SELECT * FROM Utilisateur WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Erreur requête utilisateur :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    const utilisateur = results[0];

    bcrypt.compare(motDePasse, utilisateur.mot_de_passe, (err, isMatch) => {
      if (err) {
        console.error('Erreur comparaison mot de passe :', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }

      if (!isMatch) {
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
      }

      // ✅ Ici tu ajouteras le token JWT plus tard
      res.json({
        message: 'Connexion réussie',
        utilisateur: {
          id: utilisateur.id_utilisateur,
          email: utilisateur.email,
          role: utilisateur.role,
        },
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});
