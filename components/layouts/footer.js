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
      <div className={styles.authorAndContributorContainer}>
        <p className={styles.authorAndContibutorText}>
          Author
        </p>
        <p className={styles.authorAndContibutorMemberText}>
          Siew Sun Wong - Professor of Nutrition
        </p>
        <p className={styles.authorAndContibutorText}>
          Contibutors
        </p>
        <p className={styles.authorAndContibutorMemberText}>
        Garrett Berliner
        </p>
        <p className={styles.authorAndContibutorMemberText}>
        Gerald Hendrix
        </p>
        <p className={styles.authorAndContibutorMemberText}>
        Emma Koehmstedt
        </p>
        <p className={styles.authorAndContibutorMemberText}>
        Kyu Sung Kwon
        </p>
        <p className={styles.authorAndContibutorMemberText}>
        Mitch Stephenson
        </p>
        </div>
        <img className={styles.dividerlineIcon} alt="" src="/dividerline.svg" />
        <div className={styles.authorAndContributorContainer}>
          <p className={styles.communityTextBold}>
          Community
          </p>
          <a href="https://forms.gle/AsuCAf2kRhGhPp6S6" className={styles.feedbackLink}> feedback </a>
        </div>

    </div>
  );
}

export default Footer;

