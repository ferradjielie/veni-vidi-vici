import React, { useEffect, useState } from "react";
import styles from "./Politique.module.css";
import axios from "axios";

function Politique() {
  const [mots, setMots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/themes/politique", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setMots(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des mots :", error);
      setLoading(false);
    });
  }, []);

  // Fonction à exécuter quand on clique sur le bouton
  const ajouterAuxFavoris = (mot) => {
    console.log("Mot ajouté aux favoris :", mot);
    // Tu pourras ici faire un appel à une future route /api/favoris pour l’enregistrer côté back
  };

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Politique</h1>
      {mots.length === 0 ? (
        <p>Aucun mot trouvé.</p>
      ) : (
        mots.map((mot) => (
          <div key={mot.id_mot} className={styles.card}>
            <h2>{mot.terme}</h2>
            <p><strong>Étymologie :</strong> {mot.etymologie}</p>
            <p><strong>Contexte :</strong> {mot.contexte}</p>
            <button onClick={() => ajouterAuxFavoris(mot)}>Ajouter aux favoris</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Politique;
