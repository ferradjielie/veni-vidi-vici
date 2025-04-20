import React from "react";
import styles from "./Themes.module.css"; 
import { Link } from 'react-router-dom';

import monaLisa from '../../assets/monaLisa.jpg';
import manOfVitruve from '../../assets/manOfVitruve.jpg';
import penseur from '../../assets/thinkerMan.jpg';
import soldats from '../../assets/roman-soldiers.png';
import coin from '../../assets/coin.png';
import law from '../../assets/law.jpg';
import ciceron from '../../assets/ciceron.png';
import expression from '../../assets/expression.jpg';
import sociaty from '../../assets/sociaty.jpg';
import family from '../../assets/family.jpg';
import science from '../../assets/science.jpg';
import statue from '../../assets/statue.jpg';

function Themes() {
  return (
    <div className={styles.container}>
      <h2>Liste des thèmes</h2>

      {/* Cartes de thèmes */}
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Science</h3>
          <img src={science} alt="Science" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Philosophie</h3>
          <img src={penseur} alt="Philosophie" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Art & Culture</h3>
          <img src={monaLisa} alt="Art & Culture" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Guerre</h3>
          <img src={soldats} alt="Guerre" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Justice</h3>
          <img src={law} alt="Justice" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Économie</h3>
          <img src={coin} alt="Économie" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Politique</h3>
          <img src={ciceron} alt="Politique" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Expressions célèbres</h3>
          <img src={expression} alt="expression" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Société</h3>
          <img src={sociaty} alt="sociaty" className={styles.cardImage} />
        </div>

        <div className={styles.card}>
          <h3>Vie quotidienne</h3>
          <img src={family} alt="vie quotidienne" className={styles.cardImage} />
        </div>


         
        <div className={styles.card}>
          <h3>Médecine</h3>
          <img src={manOfVitruve} alt="medecine" className={styles.cardImage} />
        </div>

         <div className={styles.card}>
          <h3>Mythologie et divinités</h3>
          <img src={statue} alt="statue" className={styles.cardImage} />
        </div>

       
    
    
      </div>
     
      </div>

      
     
  )
}

export default Themes;
