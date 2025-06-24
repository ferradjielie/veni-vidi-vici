const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function verifierToken(req, res, next) {
  const authHeader = req.headers.authorization;

  // Vérifie si un header Authorization est présent
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Accès non autorisé : token manquant' });
  }

  const token = authHeader.split(' ')[1]; // Récupère le token après "Bearer"

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.utilisateur = decoded; // On peut attacher l’utilisateur à la requête si besoin
    next(); // Laisse passer vers la route protégée
  } catch (err) {
    console.error('Erreur vérification token :', err);
    return res.status(401).json({ error: 'Token invalide ou expiré' });
  }
}

module.exports = verifierToken;
