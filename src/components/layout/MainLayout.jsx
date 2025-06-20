import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';
const MainLayout = () => (
  <div className={styles.layoutWrapper}>
    <Header />
    <main className={styles.mainContent}><Outlet /></main>
    <Footer />
  </div>
);
export default MainLayout;