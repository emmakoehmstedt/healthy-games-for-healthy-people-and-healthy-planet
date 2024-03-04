import { useState, useCallback, useEffect } from "react";
import { supabase } from "../lib/initSupabase";
import { useRouter } from "next/router";

import {
  useCalculator,
  useCalculatorUpdate,
} from "../context/calculatorContext";

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

  const [foodCards, setFoodCards] = useState([]);
  const [cookedFilter, setCookedRawFilter] = useState("all");

  const onBackClick = useCallback(() => {
    router.push("/mainFoodPage");
  }, [router]);

  const onNewCalcClick = useCallback(() => {
    calculatorFunctions.onClearCalculator();
    router.push("/mainFoodPage");
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.rpc("getfoodcardstars");

        console.log("Data: ", data);
        console.log("Results Page -> Calculator Items: ", calculatorItems);

        if (error) {
          throw error;
        }

        const foodsArray = data.map((food) => ({
          id: food.id,
          name: food.food_name,
          info_id: food.info_id,
          facts: food.facts,
          carbon_footprint: food.carbon_footprint,
          water_footprint: food.water_footprint,
        }));

        setFoodCards(foodsArray);
        console.log("Data from the table:", foodsArray);
      } catch (error) {
        console.error("Error fetching data from Supabase:", error.message);
      }
    };

    fetchData();
  }, []);

  const onCookedRawDropdownFrameContainerClick = useCallback((val) => {
    //sync to proj
    setCookedRawFilter(val);
  }, []);

  return (
    <Layout>
      <div className={styles.resultsPage}>
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
            <div
              className={[styles.topBtnsBar, styles.exportBtnColor].join(" ")}
            >
              {/* whats the purpose of the export and what file type? */}
              <b className={styles.exportBtn}>Export</b>
            </div>
          </div>
        </div>
        <div className={styles.infoDiv}>
          <div className={[styles.amountCard, styles.infoDivChild].join(" ")}>
            <h1>Amount</h1>
            {/* insert food cards 
                        probably auto generated food cards with like a loop that iterates through or something
                        for now ill put the divs and stuff for like the functionality
                        */}
            <div className={styles.infoCardsScroll}>
              <div className={styles.foodItem}>
                <div className={styles.foodItemSection1}>
                  <img
                    // className={}
                    alt=""
                    src=""
                  />
                  <div>
                    {/* cooked/raw dropdown */}
                    <CookedRawDropDown
                      onCRClick={onCookedRawDropdownFrameContainerClick}
                      selectedCook={cookedFilter}
                    />
                  </div>
                </div>
                <div className={styles.foodItemSection2}>
                  <p>[insert name]</p>
                  <div className={styles.selectAmountBtnDiv}>
                    {/* select amount button 
                                        this is where the pop up comes in to select choices
                                        */}
                    <b className={styles.selectAmountBtn}>Select Amount</b>
                  </div>
                  =
                  <div className={styles.selectAmountDisplayDiv}>
                    {/* selected amount display */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={[styles.nutritionCard, styles.infoDivChild].join(" ")}
          >
            <h1>Nutrition</h1>
            {/* just enter the value of the total amount of stars */}
            <TotalStarsCalculation numOfStars={27} />

            {/* separate div for a scroll wheel */}
            <div className={styles.infoCardsScroll}>
              {/* ????????? im sure the issue is that it can't seem to find the supabase query bc idk how to fix......... it gotta be a simple error */}
              <FoodCards foods={foodCards} />
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid rgba(0,0,0,.25)",
                }}
              >
                Test
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid rgba(0,0,0,.25)",
                }}
              >
                Test
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid rgba(0,0,0,.25)",
                }}
              >
                Test
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid rgba(0,0,0,.25)",
                }}
              >
                Test
              </div>
            </div>
          </div>
          <div
            className={[styles.foodPrintCard, styles.infoDivChild].join(" ")}
          >
            <h1>Foodprint</h1>
            <div className={styles.totalFoodPrint}>
              <h2>Total Foodprint</h2>
              <p>Your meal uses the same amount of water as...</p>
              {/*  */}
              <p>and emits the same amount of carbon as...</p>
              {/*  */}
            </div>

            {/* separate div for a scroll wheel */}
            <div className={styles.infoCardsScroll}>
              {/* insert foodprint info */}
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid rgba(0,0,0,.25)",
                }}
              >
                Test
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid rgba(0,0,0,.25)",
                }}
              >
                Test
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid rgba(0,0,0,.25)",
                }}
              >
                Test
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid rgba(0,0,0,.25)",
                }}
              >
                Test
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResultsPage;
