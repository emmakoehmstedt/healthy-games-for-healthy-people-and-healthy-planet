import { useRouter } from "next/router";
import styles from "./header-footer.module.css";

function TopBar() {
  const router = useRouter();

  const handleInformationClick = () => {
    // Use the router to navigate to the information page or handle it as needed
    router.push("/information");
  };

  const handleHomeClick = () => {
    // Use the router to navigate to the home page
    router.push("/");
  };

  return (
    <div className={styles.headerframe}>
      <a
        href="https://oregonstate.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.osuLink}
      >
        <img
          className={styles.oregonstateuniversityicon}
          alt=""
          src="/oregonStateUniversityIcon.png"
        />
      </a>
      <div className={styles.homebutton} onClick={handleHomeClick}>
        <b>Home</b>
      </div>
      <div className={styles.informationbutton} onClick={handleInformationClick}>
        <b>Information</b>
      </div>
    </div>
  );
}

export default TopBar;
