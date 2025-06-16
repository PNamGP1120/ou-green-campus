import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { Button } from './Button';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button onClick={onClose} className={styles.closeButton}>&times;</button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root') // Cần thêm <div id="modal-root"></div> vào file public/index.html
  );
};
export default Modal;