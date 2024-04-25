import React from 'react';

import styles from './styles/colorMeter.module.css';

const ColorMeter = ({ colors, values }) => {
  // Calculate total value
  const totalValue = values.reduce((acc, value) => acc + value, 0);

  return (
    <div className={styles.colorMeter}>
      {values.map((value, index) => (
        <div
          key={index}
          className={styles.colorSegment}
          style={{
            backgroundColor: colors[index],
            width: `${(value / totalValue) * 100}%`
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorMeter;
