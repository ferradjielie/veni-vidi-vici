import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.navContent}>
    <div className={styles.navInner}>
      <div className={styles.logo}>
        <h1>VVV</h1>
      </div>
  
      <ul className={styles.navLinks}>
        <li><a href="connexion">Se connecter</a></li>
      </ul>
    </div>
  </nav>
  
  );
}

export default Nav;
