import React from 'react';
import styles from './Main.module.css'; 
import { Link } from 'react-router-dom';
import socrate from '../../assets/socrate.png';
import colisee from '../../assets/colisee.jpg';
import manuscrit from '../../assets/manuscrit.jpg';
function Main() {
  return (
    <div className={styles.container}> 
      <header className={styles.header}>
        <h1 className={styles.title}>Veni Vidi Vici</h1>
      </header>

      <main className={styles.main}>
        <p className={styles.paragraph}>
          Verba antiqua resurgent. Disce linguam imperii, et in sapientiae vestigiis ambula.
        </p>
        <p className={styles.paragraph}>
          Découvrez la langue latine comme vous ne l’avez jamais vue : explorez des thèmes fascinants et essentiels de la société romaine — de la guerre à la politique, en passant par l'art et la science.
        </p>
        
        <div className={styles.cardsContainer}>

           <div className={styles.card}>
                <h3>Voyagez au coeur d'une langue riche et chargée d'histoire</h3>
                <img src={colisee} alt="colisee" className={styles.cardImage} />
           </div>

           <div className={styles.card}>
                <h3>  Élevez votre esprit, affûtez votre éloquence </h3>
                <img src={socrate} alt="socrate" className={styles.cardImage} />
           </div>

           <div className={styles.card}>
                <h3> Appropriez vous des expressions célèbres, brillez en société </h3>
                <img src={manuscrit} alt="socrate" className={styles.cardImage} />
           </div>

        </div>
      
             
        
       

        <Link to="/themes" className={styles.button}>
          Explorer les thèmes
        </Link>
      </main>
    </div>
  );
}

export default Main;
