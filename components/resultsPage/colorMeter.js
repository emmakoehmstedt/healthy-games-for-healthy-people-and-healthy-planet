import React from 'react';
import styles from './styles/colorMeter.module.css';

const ColorMeter = ({ colors, value }) => {
  // Calculate total value
  const totalValue = value;

  return (
    <div className={styles.colorMeter}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={styles.colorSegment}
          style={{
            backgroundColor: color,
            width: `${totalValue}%`
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorMeter;
