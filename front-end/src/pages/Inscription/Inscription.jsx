import React, { useState } from "react";
import axios from "axios";
import styles from "./Inscription.module.css";

function Inscription() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState("");

  const motDePasseValide = (mdp) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{14,}$/;
    return regex.test(mdp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!motDePasseValide(motDePasse)) {
      setErreur(
        "Le mot de passe doit contenir au minimum 14 caractères, une majuscule, une minuscule et un chiffre."
      );
      setSucces("");
      return;
    }

    setErreur("");

    try {
      const response = await axios.post("http://localhost:5000/api/inscription", {
        email,
        motDePasse,
      });

      if (response.status === 201) {
        setSucces("Compte créé avec succès !");
        setEmail("");
        setMotDePasse("");
      }
    } catch (err) {
      if (err.response?.data?.error) {
        setErreur(err.response.data.error);
      } else {
        setErreur("Une erreur est survenue. Veuillez réessayer.");
      }
      setSucces("");
    }
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
        {succes && <p className={styles.succes}>{succes}</p>}

        <button type="submit">S'inscrire</button>
      </form>

      <p className={styles.lien}>
        Déjà un compte ? <a href="/connexion">Connectez-vous</a>
      </p>
    </div>
  );
}

export default Inscription;
