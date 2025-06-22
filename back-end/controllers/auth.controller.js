// controllers/auth.controller.js
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const JWT_SECRET = process.env.JWT_SECRET;

function motDePasseValide(mdp) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{14,}$/;
  return regex.test(mdp);
}

exports.inscription = (req, res) => {
  const { email, motDePasse } = req.body;
  const role = 'utilisateur';

  if (!email || !motDePasse) {
    return res.status(400).json({ error: 'Email et mot de passe sont requis' });
  }

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
    db.query(sql, [email, hashedPassword, role], (err) => {
      if (err) {
        console.error('Erreur insertion utilisateur :', err);
        return res.status(500).json({ error: 'Erreur lors de la création du compte' });
      }
      res.status(201).json({ message: 'Utilisateur créé avec succès' });
    });
  });
};

exports.connexion = (req, res) => {
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

      const token = jwt.sign(
        { id: utilisateur.id_utilisateur, email: utilisateur.email, role: utilisateur.role },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({
        message: 'Connexion réussie',
        token,
        utilisateur: {
          id: utilisateur.id_utilisateur,
          email: utilisateur.email,
          role: utilisateur.role,
        },
      });
    });
  });
};
