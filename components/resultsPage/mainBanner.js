import React from 'react';

import ColorMeter from './colorMeter';

import styles from "./styles/mainBanner.module.css";

const MainBanner = ({ foods, numOfStars }) => {

  const colors = ['#FF0000', '#FFA500', '#FFFF00', '#90EE90', '#008000'];
  const values = [1, 2, 3, 4, 5]; 

  return (
    <div className={styles.mainBanner}>
      <div className={styles.imageColumn}>
        {foods.map((food) => (
          <img
            key={food.id}
            className={styles.foodImage}
            src={food.imagePath}
            alt={food.name}
          />
        ))}
      </div>
      <div>
      <ColorMeter colors={colors} values={values} />
      </div>
      <div className={styles.contentBottom}>
        <h2 className={styles.currentFoodName}>Your Meal</h2>
        <div className={styles.totalStars}>
          <div className={styles.largeStar}>⭐</div>
          <h1>{Math.floor(numOfStars)} stars!</h1>
        </div>
      </div>
    </div>

  );
};

export default MainBanner;
