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

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Mots liés au thème : Politique</h1>
      {mots.length === 0 ? (
        <p>Aucun mot trouvé.</p>
      ) : (
        mots.map(function (mot) {
          return (
            <div key={mot.id_mot} className={styles.card}>
              <h2>{mot.terme}</h2>
              <p><strong>Étymologie :</strong> {mot.etymologie}</p>
              <p><strong>Contexte :</strong> {mot.contexte}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Politique;
