import React, { useState } from "react";
import styles from "./Inscription.module.css";

function Inscription() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  // Fonction de validation CNIL
  const motDePasseValide = (mdp) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{14,}$/;
    return regex.test(mdp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Vérification du mot de passe
    if (!motDePasseValide(motDePasse)) {
      setErreur(
        "Le mot de passe doit contenir au minimum 14 caractères, une majuscule, une minuscule et un chiffre."
      );
      return;
    }

    setErreur(""); // Réinitialise l'erreur si OK

    // Envoie au backend (à implémenter avec axios par ex.)
    console.log("Inscription envoyée :", { email, motDePasse });
  };

  return (
    <div className={styles.container}>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.champ}>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.champ}>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
        </div>

        {erreur && <p className={styles.erreur}>{erreur}</p>}

        <button type="submit">S'inscrire</button>
      </form>

      <p className={styles.lien}>
        Déjà un compte ? <a href="/connexion">Connectez-vous</a>
      </p>
    </div>
  );
}

export default Inscription;
