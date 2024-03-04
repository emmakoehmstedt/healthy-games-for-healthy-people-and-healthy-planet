import styles from "./styles/header-footer.module.css";

/*************************************************************************
 * Component: footer
 * Description: This component renders the footer that will appear on 
 * every page in the application
 *************************************************************************/
function Footer() {
  return (
    <div className={styles.footerframe}>
      <div className={styles.footerInfoContainer}>
        <img className={styles.osufootericon} alt="" src="/osufootericon.svg" />
        <b className={styles.collegeOfHealth}>
          College Of Health ASP3IRE Center
        </b>
        <b className={styles.oregonStateUniversitys}>
          Oregon State University’s Advancing Science, Practice, Programming and
          Policy in Research Translation for Children's Environmental Health
          Center
        </b>
      </div>
      <img className={styles.dividerlineIcon} alt="" src="/dividerline.svg" />
    </div>
  );
}

export default Footer;
