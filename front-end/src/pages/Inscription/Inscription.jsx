import React, { useState } from "react";
import styles from "./Inscription.module.css";

function Inscription() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu enverras les données au backend via axios (plus tard)
    console.log("Inscription :", { email, motDePasse });
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

        <button type="submit">S'inscrire</button>
      </form>

      <p className={styles.lien}>
        Déjà un compte ? <a href="/connexion">Connectez-vous</a>
      </p>
    </div>
  );
}

export default Inscription;
