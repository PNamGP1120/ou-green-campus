import React, { useState } from 'react';
import styles from './MinigamePage.module.css';
import plasticBottleImg from '../../assets/images/plastic-bottle.png';
import bananaPeelImg from '../../assets/images/banana-peel.jpg';
import glassJarImg from '../../assets/images/glass-jar.jpg';
import pizzaBoxImg from '../../assets/images/pizza-box.jpg';
import recyclableBinImg from '../../assets/images/recyclable-bin.jpg';
import organicBinImg from '../../assets/images/organic-bin.png';
import nonRecyclableBinImg from '../../assets/images/non-recyclable-bin.jpg';

const MinigamePage = () => {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const trashItems = [
    { name: 'Plastic Bottle', type: 'recyclable', img: plasticBottleImg },
    { name: 'Banana Peel', type: 'organic', img: bananaPeelImg },
    { name: 'Glass Jar', type: 'recyclable', img: glassJarImg },
    { name: 'Pizza Box', type: 'non-recyclable', img: pizzaBoxImg },
  ];

  const handleDrop = (itemType, binType) => {
    if (itemType === binType) {
      setScore(score + 1);
      setMessage('Correct! Keep going!');
    } else {
      setMessage('Oops! Try again.');
    }
  };

  return (
    <div className={styles.minigameContainer}>
      <h1>Trash Sorting Game</h1>
      <p>Score: {score}</p>
      <p className={styles.message}>{message}</p>
      <div className={styles.trashItems}>
        {trashItems.map((item, index) => (
          <div
            key={index}
            className={styles.trashItem}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('type', item.type)}
          >
            <img src={item.img} alt={item.name} className={styles.trashImage} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.bins}>
        <div
          className={styles.bin}
          onDrop={(e) => handleDrop(e.dataTransfer.getData('type'), 'recyclable')}
          onDragOver={(e) => e.preventDefault()}
        >
          <img src={recyclableBinImg} alt="Recyclable Bin" className={styles.binImage} />
          <p>Recyclable Bin</p>
        </div>
        <div
          className={styles.bin}
          onDrop={(e) => handleDrop(e.dataTransfer.getData('type'), 'organic')}
          onDragOver={(e) => e.preventDefault()}
        >
          <img src={organicBinImg} alt="Organic Bin" className={styles.binImage} />
          <p>Organic Bin</p>
        </div>
        <div
          className={styles.bin}
          onDrop={(e) => handleDrop(e.dataTransfer.getData('type'), 'non-recyclable')}
          onDragOver={(e) => e.preventDefault()}
        >
          <img src={nonRecyclableBinImg} alt="Non-Recyclable Bin" className={styles.binImage} />
          <p>Non-Recyclable Bin</p>
        </div>
      </div>
    </div>
  );
};

export default MinigamePage;