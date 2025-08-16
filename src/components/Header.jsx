import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <NavLink
          to="/"
          className={styles.link}
          activeClassName={styles.active}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={styles.link}
          activeClassName={styles.active}
          onClick={() => setIsOpen(false)}
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          className={styles.link}
          activeClassName={styles.active}
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={styles.link}
          activeClassName={styles.active}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/admin/login"
          className={styles.link}
          activeClassName={styles.active}
          onClick={() => setIsOpen(false)}
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;