import Head from "next/head";
import Layout from "../components/layouts/layout";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./home.module.css";

const Home = () => {
  const router = useRouter();

  const onCalculatorClick = useCallback(() => {
    router.push("/mainFoodPage");
  }, [router]);

  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.homepagebackgroundframe}>
          <img
            className={styles.homepagebackgroundimageIcon}
            alt=""
            src="/homepageBackgroundImage.png"
          />
          <b className={styles.juniorOutdoorFoodContainer}>
            <p>Junior Outdoor Food Navigators Food App</p>
          </b>
        </div>
        <div className={styles.jofndescriptionframe}>
          <b className={styles.theJrOutdoorContainer}>
            <b className={styles.climateResilienceStarts}>
              Climate Resilience Starts Here
            </b>
            <p
              className={styles.theJrOutdoor}
            >{`The Jr. Outdoor Food Navigators (JOFN) is funded by the National Institute of Environmental Health Sciences (NIEHS)
          through the Oregon State University ASP3IRE Center Translational Core to build climate resilience through outdoor play 
          and positive food experience among school-aged children. One of the education and outreach tools is the Food Calculator. 
           `}</p>
          </b>
        </div>

        <div className={styles.calculatorframe} onClick={onCalculatorClick}>
          <div>
            <div className={styles.calculatorbutton}>
              <img
                className={styles.calculatoricon}
                alt=""
                src="/calculatorIcon.png"
              />
              <b className={styles.calculator}>Calculator</b>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
