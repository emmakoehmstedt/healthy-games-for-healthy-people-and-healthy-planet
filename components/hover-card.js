import styles from "./hover-card.module.css";
import Image from "next/image";

const HoverCard = () => {
  return (
    <div className={styles.hovercard}>
      <div className={styles.fadedCarrotCard} />
      <div className={styles.addToCalculatorButton}>
        <div className={styles.addToCalculatorRectangle} />
        <b className={styles.addToCalculator}>Add to Calculator</b>
        <Image
          className={styles.calculatorIcon}
          alt=""
          src="/calculator-icon@2x.png"
          height={100}
          width={100}
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
