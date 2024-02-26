import { useState, useCallback } from "react";

import { supabase } from "../lib/initSupabase";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Layout from "../components/layouts/layout";
import foods from "../data/food_images";

import styles from "./resultsPage.module.css";

const ResultsPage = () => {
    const router = useRouter();

    const [cookedFilter, setCookedRawFilter] = useState("all");

    const onBackClick = useCallback(() => {
        router.push("/resultsPage");
    }, [router]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.rpc("getfoodcardinformationtable");

                console.log("Data: ", data);

                if (error) {
                    throw error;
                }

                const foodsArray = data.map((food) => ({
                    id: food.id,
                    name: food.food_name,
                    facts: information.facts,
                    carbon_footprint: information.carbon_footprint,
                    water_footprint: information.water_footprint
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

    return(
        <Layout>
            <div className={styles.resultsPage}>
                <div className={styles.topBtnBar}>
                    <div onClick={onBackClick}>
                        <b className={styles.backBtn}>🔙 Back</b>
                    </div>
                    <div className={styles.newCalculationBtn}></div>
                    <div className={styles.exportBtn}>
                        {/* whats the purpose of the export and what file type? */}
                    </div>
                </div>
                <div className={styles.infoDiv}>
                    <div className={styles.amountCard}>
                        {/* insert food cards 
                        probably auto generated food cards with like a loop that iterates through or something
                        for now ill put the divs and stuff for like the functionality
                        */}
                        <div>
                            <div>
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
                            <div>
                                <p>[insert name]</p>
                                <div>
                                    {/* select amount button */}
                                    <b></b>
                                </div>
                                <div>
                                    {/* selected amount display */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nutritionCard}>
                        {/* insert star cards */}
                        <p>Total Score</p>
                        {/* insert stars */}
                        <h1>{/* number */} stars!</h1>
                        {/* insert ingredient cards*/}
                        <div>
                            <FoodCards foods={foodCards}/>
                        </div>
                    </div>
                    <div className={styles.foodPrintCard}>
                        {/* insert foodprint info */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ResultsPage;

function TopBar() {
    return (
        <div className={styles.headerframe}>
            <img
            className={styles.oregonstateuniversityicon}
            alt=""
            src="/oregonStateUniversityIcon.png"
            />
            <div className={styles.informationbutton}>
            <b>Information</b>
            </div>
        </div>
    );
}

function CookedRawDropDown({ onCRClick, selectedCook }){
    return (
        <select
            id="dropdown"
            value={selectedCook}
            onChange={(e) => onCRClick(e.target.value)}
        >
            <option value="cooked">Cooked</option>
            <option value="raw">Raw</option>
        </select>
    );
}

function FoodCards({ foods }) {
    return (
        <div>
        {/* <div className={styles.foodcardsframe}> */}
            {foods.map((food) => (
                <FoodCard key={food.id} id={food.id} name={food.name} facts={food.facts} />
            ))}
        </div>
    );
  }
  
  function FoodCard({ id, name }) {
    const food = foods.find((foodItem) => foodItem.id === id);
    if (!food){
        return null;
    }

    const imagePath = food.image;
    return (
        <div className={styles.foodcard}>
            <img className={styles.foodcardimage} src={`/${imagePath}`} alt={name} />
            <p>{name}</p>
            <p>{facts}</p>
        </div>
    );
  }
  