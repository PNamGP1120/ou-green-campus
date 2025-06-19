import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import sloganoug from '../../assets/images/slogan-oug.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <NavLink to="/">
            <img src={sloganoug} alt="OU Green Plus Logo" className={styles.logo} />
          </NavLink>
        </div>

        {/* Navigation */}
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