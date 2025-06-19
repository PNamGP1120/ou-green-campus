import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo và thông tin */}
        <div className={styles.logoSection}>
          <img src={require('../../assets/images/logo.png')} alt="OU Green Plus Logo" className={styles.logo} />
          <p>OU Green Plus - Lan tỏa ý thức bảo vệ môi trường trong cộng đồng sinh viên.</p>
        </div>

        {/* Liên kết nhanh */}
        <div className={styles.linksSection}>
          <h3>Liên kết nhanh</h3>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/du-an">Dự án</a></li>
            <li><a href="/tin-tuc">Tin tức</a></li>
            <li><a href="/lien-he">Liên hệ</a></li>
          </ul>
        </div>

        {/* Kết nối mạng xã hội */}
        <div className={styles.socialSection}>
          <h3>Kết nối với chúng tôi</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com/ougreenplus" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com/ougreenplus" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com/ougreenplus" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="mailto:ougreenplus@ou.edu.vn"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; 2025 OU Green Plus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;