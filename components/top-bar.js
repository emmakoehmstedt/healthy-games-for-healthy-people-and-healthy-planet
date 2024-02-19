import styles from "./top-bar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <img
        className={styles.oregonStateUniversityIcon}
        alt=""
        src="/oregon-state-university-icon@2x.png"
      />
      <div className={styles.informationButton}>
        <div className={styles.informationButtonFrame}>
          <b className={styles.information}>Information</b>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
