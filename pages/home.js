import Head from "next/head";
import TopBar from "../components/top-bar";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Junior Outdoor Food Navigators Food App</title>
        <meta name="description" content="User Home Screen" />
      </Head>
      <div className={styles.home}>
        <div className={styles.frame}>
          <TopBar />
          <div className={styles.backgroundImage}>
            <b className={styles.juniorOutdoorFoodContainer}>
              <p className={styles.juniorOutdoorFood}>
                Junior Outdoor Food Navigators
              </p>
              <p className={styles.juniorOutdoorFood}> Food App</p>
            </b>
          </div>
        </div>
        <div className={styles.jofnInfo}>
          <b className={styles.climateResilienceStarts}>
            Climate Resilience Starts Here
          </b>
          <b className={styles.theJrOutdoorContainer}>
            <p
              className={styles.theJrOutdoor}
            >{`The Jr. Outdoor Food Navigators (JOFN) is funded by the National Institute of Environmental Health Sciences (NIEHS) `}</p>
            <p
              className={styles.theJrOutdoor}
            >{`through the  Oregon State University ASP3IRE Center Translational Core to build climate resilience through outdoor `}</p>
            <p
              className={styles.theJrOutdoor}
            >{`play and positive food experience among school-aged children. One of the education and outreach tools is the `}</p>
            <p className={styles.juniorOutdoorFood}>{`Food Calculator. `}</p>
          </b>
        </div>
        <div className={styles.calculatorButton}>
          <div className={styles.calculatorButton1}>
            <img
              className={styles.calculatorIcon}
              alt=""
              src="/calculator-icon@2x.png"
            />
            <b className={styles.calculator}>Calculator</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
