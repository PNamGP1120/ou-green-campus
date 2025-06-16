import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, link, category, date }) => {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.imageLink}>
        <img src={image || 'https://placehold.co/600x400/e8f5e9/616161?text=OU+Green'} alt={title} className={styles.cardImage} />
        {category && <span className={styles.categoryTag}>{category}</span>}
      </Link>
      <div className={styles.cardContent}>
        {date && <span className={styles.cardDate}>{date}</span>}
        <h3 className={styles.cardTitle}><Link to={link}>{title}</Link></h3>
        <p className={styles.cardDescription}>{description}</p>
        <Link to={link} className={styles.readMore}>Xem chi tiết →</Link>
      </div>
    </div>
  );
};
export default Card;