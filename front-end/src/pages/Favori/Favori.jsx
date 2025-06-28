import React, { useEffect, useState } from "react";
import styles from "./Favori.module.css";
import axios from "axios";

function Favori() {
  const [favoris, setFavoris] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/favoris", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setFavoris(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Erreur lors du chargement des favoris :", err);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className={styles.container}>
      <h1>Mes favoris</h1>
      {favoris.length === 0 ? (
        <p>Vous n'avez encore aucun mot en favori.</p>
      ) : (
        favoris.map((mot) => (
          <div key={mot.id_mot} className={styles.card}>
            <h2>{mot.terme}</h2>
            <p><strong>Étymologie :</strong> {mot.etymologie}</p>
            <p><strong>Contexte :</strong> {mot.contexte}</p>

            <textarea
              placeholder="Ajoutez votre propre commentaire..."
              defaultValue={mot.description_perso || ""}
              onBlur={(e) => {
                axios.put(
                  `http://localhost:5000/api/favoris/${mot.id_mot}`,
                  { description_perso: e.target.value },
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                ).catch((err) => {
                  console.error("Erreur en sauvegardant la description :", err);
                });
              }}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Favori;
