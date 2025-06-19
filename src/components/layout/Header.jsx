import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.ou}>OU</span>
          <span className={styles.green}>GREEN</span>
          <span className={styles.plus}>+</span>
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Trang Chủ</NavLink>
          <NavLink to="/du-an" className={({ isActive }) => (isActive ? styles.active : '')}>Dự Án</NavLink>
          <NavLink to="/tin-tuc" className={({ isActive }) => (isActive ? styles.active : '')}>Tin Tức</NavLink>
          <NavLink to="/lien-he" className={({ isActive }) => (isActive ? styles.active : '')}>Liên Hệ</NavLink>
          <NavLink to="/minigame" className={({ isActive }) => (isActive ? styles.active : '')}>Minigame</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;