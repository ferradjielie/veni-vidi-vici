import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Favori.module.css";

function Favori() {
  const [favoris, setFavoris] = useState([]);
  const [editedNotes, setEditedNotes] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/favoris", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setFavoris(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleNoteChange = (id_mot, value) => {
    setEditedNotes({ ...editedNotes, [id_mot]: value });
  };

  const updateNotes = async (id_mot) => {
    const token = localStorage.getItem("token");
    const notes = editedNotes[id_mot] || "";

    try {
      await axios.put(
        `http://localhost:5000/api/favoris/${id_mot}`,
        { notes },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Notes enregistrées !");
    } catch (error) {
      console.error("Erreur mise à jour notes :", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Mes Favoris</h1>
      {favoris.map((mot) => (
        <div key={mot.id_mot} className={styles.card}>
          <h2>{mot.terme}</h2>
          <p><strong>Étymologie :</strong> {mot.etymologie}</p>
          <p><strong>Contexte :</strong> {mot.contexte}</p>

          <textarea
            placeholder="Ajoutez vos notes personnelles..."
            defaultValue={mot.notes || ""}
            onChange={(e) => handleNoteChange(mot.id_mot, e.target.value)}
          />
          <button onClick={() => updateNotes(mot.id_mot)}>Enregistrer</button>
        </div>
      ))}
    </div>
  );
}

export default Favori;
