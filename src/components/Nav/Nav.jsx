import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.navContent}>
      <div className={styles.logo}>
        <h1>VVV</h1>
      </div>

      <ul className={styles.navLinks}>
        <li><a href="#">Inscription</a></li>
        <li><a href="#">Se connecter</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
