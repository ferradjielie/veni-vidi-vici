// src/components/Nav.jsx
import styles from './Nav.module.css';
import LogoutButton from '../Logout/LogoutButton'; // <-- ajuste le chemin si besoin

function Nav() {
  const token = localStorage.getItem('token'); // Vérifie si l’utilisateur est connecté

  return (
    <nav className={styles.navContent}>
      <div className={styles.navInner}>
        <div className={styles.logo}>
          <h1>VVV</h1>
        </div>

        <ul className={styles.navLinks}>
          {!token ? (
            <li><a href="/connexion">Se connecter</a></li>
          ) : (
            <li><LogoutButton /></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
