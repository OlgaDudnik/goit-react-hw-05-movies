import { NavLink } from 'react-router-dom';
import styles from '../styles/styles.module.css';

export const Navigation = () => {
  return (
    <header className={styles.ListApp}>
      <span className={styles.ListItemApp}>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeNavLink' : 'NavLink')}
          to="/"
        >
          Home
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeNavLink' : 'NavLink')}
          to="/movies"
        >
          Movies
        </NavLink>
      </span>
    </header>
  );
};
