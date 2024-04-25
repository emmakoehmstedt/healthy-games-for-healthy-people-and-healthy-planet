import { useState, useCallback, useEffect } from "react";
import { supabase } from "../lib/initSupabase";
import { useRouter } from "next/router";

import {
  useCalculator,
  useCalculatorUpdate,
} from "../context/calculatorContext";

import MainBanner from "../components/resultsPage/mainBanner";
import Layout from "../components/layouts/layout";
import CookedRawDropDown from "../components/resultsPage/cookedRawDropdown";
import FoodCards from "../components/resultsPage/foodCards";
import TotalStarsCalculation from "../components/resultsPage/starRating";

import styles from "./styles/resultsPage.module.css";

/*************************************************************************
 * Component: ResultsPage
 * Description: This component displays the carbon/water/nutrition
 * results for each food that the user selected in the calculator.
 *************************************************************************/
const ResultsPage = () => {
  const router = useRouter();

  const calculatorItems = useCalculator();
  const calculatorFunctions = useCalculatorUpdate();

  const [informationCards, setInformationCards] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  //const [cookedFilter, setCookedRawFilter] = useState("all");

  const onBackClick = useCallback(() => {
    router.push("/mainFoodPage");
  }, [router]);

  const onNewCalcClick = useCallback(() => {
    calculatorFunctions.onClearCalculator();
    router.push("/mainFoodPage");
  }, [router]);

  //function to fetch foods with color information
  const fetchData = async () => {
    try {
      //function in database to fetch foods with color information
      const { data, error } = await supabase.rpc("getdetailedinformation");

      if (error) {
        throw error;
      }
      console.log("RESULTS PAGE food data: ", calculatorItems);
      //map each food to its own object
      const informationArray = data.map((food) => ({
        id: food.id,
        name: food.food_name,
        carbon_footprint: food.carbon_footprint,
        water_footprint: food.water_footprint,
        facts: food.facts,
        stars: food.nutrition_stars,
      }));
      const completeInfo = informationArray.filter((info) =>
        calculatorItems.some((item) => item.id === info.id)
      );

      //iterate over each food in completeInfo arra. Add stars to the the total, with total starting at 0
      const allStars = completeInfo.reduce(
        (total, info) => total + info.stars,
        0
      );

      setTotalStars(allStars);

      //make a mapping between id and image paths to be able to add image paths to the foods field
      //this could be fixed later by adding image paths to the database
      const mapBetweenIdsandPaths = {};
      for (const item of calculatorItems) {
        mapBetweenIdsandPaths[item.id] = item.imagePath;
      }
      const completeInfoWithImagePath = completeInfo.map((info) => {
        const itemWithPath = { ...info };
        itemWithPath.imagePath = mapBetweenIdsandPaths[info.id];
        return itemWithPath;
      });
      setInformationCards(completeInfoWithImagePath);
      console.log("Information Array", completeInfoWithImagePath);
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const onCookedRawDropdownFrameContainerClick = useCallback((val) => {
  //   //sync to proj
  //   setCookedRawFilter(val);
  // }, []);

  return (
    <Layout>
      {/* THIS IS FOR THE TOP BAR W/ BACK BUTTON AND NEW CALCULATION BUTTON*/}
      <div className={styles.resultsContainer}>
        <div style={{ marginLeft: "1%" }} className={styles.topBtnBar}>
          <div onClick={onBackClick}>
            <div className={styles.topBtnsBar}>
              <b className={styles.backBtn}>⬅ Back</b>
            </div>
            {/* we have to make sure the data between the mainFoodPage and resultsPage is consistent/same */}
          </div>
          <div className={styles.topBtnBarSubDiv}>
            <div className={styles.topBtnsBar} onClick={onBackClick}>
              <b className={styles.newCalculationBtn} onClick={onNewCalcClick}>
                New Calculation
              </b>
            </div>
          </div>
        </div>
        {/*GERALD: here is where you can put the placeholder overall results card*/}
        {/*THIS IS TO GO THROUGH EACH CALCULATED FOOD AND DISPLAY IT IN THE FOODRESULT COMPONENT*/}
        <div className={styles.individualResultsContainer}>
          <MainBanner foods={informationCards} numOfStars={totalStars} />
          {informationCards.map((card) => (
            <FoodResult key={card.id} currentFood={card} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

function FoodResult({ currentFood }) {
  return (
    <div className={styles.individualResultsCard}>
      <div className={styles.imageAndFoodName}>
        <img src={currentFood.imagePath} alt={currentFood.name} />
        <h2 className={styles.currentFoodName}>{currentFood.name}</h2>
      </div>
      <div className={styles.AmountAndFootprint}>
        <div className={styles.amountBox}>amount box</div>
        <div className={styles.footprintBox}>footprint box</div>
      </div>
      <div className={styles.nutritionAndFunFacts}>
        <div className={styles.nutritionBox}>
          <p className={styles.nutritionBoxTitle}>Nutrition Value</p>
          {/* <h2 className={styles.currentNutritionStars}>
            {currentFood.nutrition_stars}
          </h2> */}
          <TotalStarsCalculation numOfStars={currentFood.stars} />
        </div>
        <div className={styles.funFactBox}>funfact box</div>
      </div>
    </div>
  );
}

export default ResultsPage;
