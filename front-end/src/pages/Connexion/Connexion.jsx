import React, { useState } from "react";
import styles from "./Connexion.module.css";

function Connexion() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔒 Tu enverras les données ici vers le backend plus tard
    console.log("Tentative de connexion avec :", email, motDePasse);
  };

  return (
    <div className={styles.container}>
      <h2>Connexion</h2>
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

        <button type="submit">Se connecter</button>
      </form>

      <p className={styles.lien}>
        Pas de compte ? <a href="/inscription">Inscrivez-vous !</a>
      </p>
    </div>
  );
}

export default Connexion;
