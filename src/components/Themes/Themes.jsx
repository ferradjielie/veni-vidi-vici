import React from "react";
import styles from "./Themes.module.css"; 
import { Link } from 'react-router-dom';

function Themes() {
  return (
    <div className={styles.container}>
      <h2>Liste des thèmes</h2>

      <div className={styles.button}>
      
      <Link to="/politique">
     <button>Politique</button>
     </Link>
            <button>Guerre</button>
            <button>Philosophie</button>
            <button>Science</button>
            <button>Justice</button>
            <button>Économie</button>
            <button>Vie quotidienne</button>
            <button>Art & Culture</button>
            <button>Société</button>
            <button>Expressions célèbres</button>
      


     </div>
      
    </div>
  );
}

export default Themes;
