// test/validation.test.js
const { motDePasseValide } = require('../utils/validation');

test('motDePasseValide devrait valider selon les critères CNIL', () => {
  // ✅ Mot de passe valide (14+ chars, maj, min, chiffre)
  expect(motDePasseValide('MonMotDePasse123')).toBe(true);
  expect(motDePasseValide('AutreExample2024')).toBe(true);
  
  // ❌ Trop court (moins de 14 caractères)
  expect(motDePasseValide('Court123A')).toBe(false);
  
  // ❌ Pas de majuscule
  expect(motDePasseValide('monmotdepasse123')).toBe(false);
  
  // ❌ Pas de minuscule  
  expect(motDePasseValide('MONMOTDEPASSE123')).toBe(false);
  
  // ❌ Pas de chiffre
  expect(motDePasseValide('MonMotDePasseSansChiffre')).toBe(false);
  
  // ❌ Vide ou null
  expect(motDePasseValide('')).toBe(false);
  expect(motDePasseValide(null)).toBe(false);
});