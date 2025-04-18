import React from 'react';
import styles from './Main.module.css'; 
import { Link } from 'react-router-dom';

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
          Découvrez la langue latine comme vous ne l’avez jamais vue : explorez des thèmes fascinants et essentiels de la société romaine — de la guerre à la politique, en passant par la sagesse et la science.
        </p>

        <Link to="/themes" className={styles.button}>
          Explorer les thèmes
        </Link>
      </main>
    </div>
  );
}

export default Main;
