import React from "react";
import styles from "./Themes.module.css"; 
import { Link } from 'react-router-dom';

import monaLisa from '../../assets/monaLisa.jpg';






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
            <div className={styles.card}>
  <h3>Art & Culture</h3>
  <img src={monaLisa} alt="Art & Culture" className={styles.cardImage} />
</div>
            <button>Société</button>
            <button>Expressions célèbres</button>
      


     </div>
      
    </div>
  );
}

export default Themes;
