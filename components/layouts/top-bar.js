import styles from "./header-footer.module.css";

function TopBar() {
  return (
    <div className={styles.headerframe}>
      <img
        className={styles.oregonstateuniversityicon}
        alt=""
        src="/oregonStateUniversityIcon.png"
      />
      <div className={styles.informationbutton}>
        <b>Information</b>
      </div>
    </div>
  );
}

export default TopBar;
