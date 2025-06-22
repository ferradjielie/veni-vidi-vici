import React, { useState } from "react";
import axios from "axios";
import styles from "./Connexion.module.css";

function Connexion() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur(""); // reset erreur

    try {
      const response = await axios.post("http://localhost:5000/api/connexion", {
        email,
        motDePasse,
      });

      console.log("Connexion réussie :", response.data);
      // Ici tu peux rediriger l’utilisateur ou stocker le token, etc.
    } catch (error) {
      console.error("Erreur connexion :", error);
      if (error.response && error.response.data && error.response.data.error) {
        setErreur(error.response.data.error);
      } else {
        setErreur("Une erreur est survenue, veuillez réessayer.");
      }
    }
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

        {erreur && <p className={styles.erreur}>{erreur}</p>}

        <button type="submit">Se connecter</button>
      </form>

      <p className={styles.lien}>
        Pas encore de compte ? <a href="/inscription">Inscrivez-vous</a>
      </p>
    </div>
  );
}

export default Connexion;
