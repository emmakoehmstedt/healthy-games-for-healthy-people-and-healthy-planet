import { useRouter } from "next/router";
import { useCalculatorUpdate } from "../../context/calculatorContext"; 
import styles from "./styles/header-footer.module.css";

/*************************************************************************
 * Component: TopBar
 * Description: This component renders the header that will appear on
 * every page in the application
 *************************************************************************/
function TopBar() {
  const router = useRouter();
  const calculatorFunctions = useCalculatorUpdate();

  // const handleInformationClick = () => {
  //   // Use the router to navigate to the information page or handle it as needed
  //   router.push("/information");
  // };

  const handleHomeClick = () => {
    // Clear the calculator state when the home button is clicked
    calculatorFunctions.onClearCalculator();
    
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
      {router.pathname !== "/" && (
        <div className={styles.homebutton} onClick={handleHomeClick}>
        <b>Home</b>
        </div>
      )}
      {/* <div
        className={styles.informationbutton}
        onClick={handleInformationClick}
      >
        <b>Information</b>
      </div> */}
    </div>
  );
}

export default TopBar;
