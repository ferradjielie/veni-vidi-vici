import React, { useEffect, useState } from "react";
import styles from "./Politique.module.css";
import { isAuthenticated } from "../../utils/auth";
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

  const ajouterAuxFavoris = async (id_mot) => {
    const token = localStorage.getItem("token");
    
    console.log("Mon token:", token); // <- JUSTE CETTE LIGNE AJOUTÉE

    try {
      await axios.post(
        "http://localhost:5000/api/favoris",
        { id_mot },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Mot ajouté aux favoris !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du mot aux favoris :", error);
      alert("Une erreur est survenue.");
    }
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
            {isAuthenticated() && (
              <button onClick={() => ajouterAuxFavoris(mot.id_mot)}>
                Ajouter aux favoris
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Politique;