import Head from "next/head";
import TopBar from "../components/top-bar";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./home.module.css";

const Home = () => {
  const router = useRouter();

  const onCalculatorClick = useCallback(() => {
    router.push("/mainFoodPage");
  }, [router]);

  return (
    <div className={styles.home}>
      <div className={styles.homeheaderframe}>
        <div className={styles.informationbutton}>
          <div className={styles.informationButtonOutline} />
          <b className={styles.information}>Information</b>
        </div>
        <img
          className={styles.oregonstateuniversityicon}
          alt=""
          src="/oregonStateUniversityIcon.png"
        />
      </div>
      <div className={styles.hompagebackgroundframe}>
        <img
          className={styles.homepagebackgroundimageIcon}
          alt=""
          src="/homepageBackgroundImage.png"
        />
        <b className={styles.juniorOutdoorFoodContainer}>
          <p className={styles.juniorOutdoorFood}>
            Junior Outdoor Food Navigators Food App
          </p>
        </b>
      </div>
      <div className={styles.jofndescriptionframe}>
        <b className={styles.theJrOutdoorContainer}>
          <p
            className={styles.theJrOutdoor}
          >{`The Jr. Outdoor Food Navigators (JOFN) is funded by the National Institute of Environmental Health Sciences (NIEHS)
          through the Oregon State University ASP3IRE Center Translational Core to build climate resilience through outdoor play 
          and positive food experience among school-aged children. One of the education and outreach tools is the Food Calculator. 
           `}</p>
        </b>
        <b className={styles.climateResilienceStarts}>
          Climate Resilience Starts Here
        </b>
      </div>
      <div className={styles.calculatorframe} onClick={onCalculatorClick}>
        <div>
          <div className={styles.calculatorbutton} />
          <b className={styles.calculator}>Calculator</b>
          <img
            className={styles.calculatoricon}
            alt=""
            src="/calculatorIcon.png"
          />
        </div>
      </div>
      <div className={styles.footerframe}>
        <img className={styles.dividerlineIcon} alt="" src="/dividerline.svg" />
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
    </div>
  );
};

export default Home;
