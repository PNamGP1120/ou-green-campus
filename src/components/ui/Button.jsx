import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'primary', size = 'md' }) => {
  return (
    <button className={`${styles.btn} ${styles[type]} ${styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;