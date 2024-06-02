import React from "react";
import ColorMeter from "./colorMeter";
import Image from "next/image";

import styles from "./styles/mainBanner.module.css";

const MainBanner = ({ foods, numOfStars, servingSizeConversion }) => {
  const maxStars = foods.length * 5;

  const starPercentage = (numOfStars / maxStars) * 100;
  let color;
  if (starPercentage <= 19) {
    color = "red";
  } else if (starPercentage <= 39) {
    color = "orange";
  } else if (starPercentage <= 59) {
    color = "yellow";
  } else if (starPercentage <= 79) {
    color = "lightgreen";
  } else {
    color = "green";
  }

  const totalStarsText = `${Math.floor(numOfStars)}/${maxStars} Stars`;

  function TotalWaterFootprint() {
    let totalGallons = 0;
    foods.forEach((food) => {
      totalGallons += servingSizeConversion(
        food.serving_size,
        food.serving_amount,
        food.water_footprint
      );
    });
    let roundedVal = Math.round(totalGallons * 100) / 100;
    return roundedVal;
  }

  return (
    <div className={styles.mainBanner}>
      <div className={styles.imageColumn}>
        {foods.map((food) => (
          <Image
            key={food.id}
            className={styles.foodImage}
            src={`/${food.imagePath}`}
            alt={food.name}
            width={470}
            height={520}
          />
        ))}
      </div>
      <div>
        <div>
          <ColorMeter colors={[color]} value={starPercentage} />
        </div>
      </div>
      <div className={styles.contentBottom}>
        <h2 className={styles.currentFoodName}>Your Meal</h2>
        <div className={styles.totalWater}>
          <div className={styles.waterFootprintTitle}>Water Footprint 💧</div>
          <h1>{TotalWaterFootprint()} gallons</h1>
        </div>
        <div className={styles.totalStars}>
          <div className={styles.largeStar}>Nutrition ⭐</div>
          <h1>
            {Math.floor(numOfStars)} / {maxStars} stars!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
