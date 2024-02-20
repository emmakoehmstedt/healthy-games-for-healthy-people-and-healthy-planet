import styles from "./hover-card.module.css";

const HoverCard = () => {
  return (
    <div className={styles.hovercard}>
      <div className={styles.fadedCarrotCard} />
      <div className={styles.addToCalculatorButton}>
        <div className={styles.addToCalculatorRectangle} />
        <b className={styles.addToCalculator}>Add to Calculator</b>
        <img
          className={styles.calculatorIcon}
          alt=""
          src="/calculator-icon@2x.png"
        />
      </div>
      <div className={styles.informationButton}>
        <div className={styles.informationRectangle} />
        <b className={styles.funFacts}>Fun Facts</b>
      </div>
    </div>
  );
};

export default HoverCard;
