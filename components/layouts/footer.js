import styles from "./header-footer.module.css";

function Footer() {
  return (
    <div className={styles.footerframe}>
      <img className={styles.dividerlineIcon} alt="" src="/dividerline.svg" />
      <img className={styles.osufootericon} alt="" src="/osufootericon.svg" />
      <b className={styles.collegeOfHealth}>College Of Health ASP3IRE Center</b>
      <b className={styles.oregonStateUniversitys}>
        Oregon State University’s Advancing Science, Practice, Programming and
        Policy in Research Translation for Children's Environmental Health
        Center
      </b>
    </div>
  );
}

export default Footer;
