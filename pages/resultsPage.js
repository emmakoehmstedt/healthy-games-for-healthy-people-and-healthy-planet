import { useState, useCallback, useEffect } from "react";

import { supabase } from "../lib/initSupabase";
import { useRouter } from "next/router";
import Layout from "../components/layouts/layout";
import foods from "../data/food_images";

import styles from "./resultsPage.module.css";

const ResultsPage = () => {
    const router = useRouter();

    const [foodCards, setFoodCards] = useState([]);
    const [cookedFilter, setCookedRawFilter] = useState("all");

    const onBackClick = useCallback(() => {
        router.push("/mainFoodPage");
    }, [router]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.rpc("getFoodCardStars");
        
                console.log("Data: ", data);
        
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
            }
            catch (error) {
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
                        <div className={styles.topBtnsBar}>
                            <b className={styles.backBtn}>⬅ Back</b>
                        </div>
                        {/* we have to make sure the data between the mainFoodPage and resultsPage is consistent/same */}
                    </div>
                    <div className={styles.topBtnBarSubDiv}>
                        <div className={styles.topBtnsBar} onClick={onBackClick}>
                            <b className={styles.newCalculationBtn}>New Calculation</b>
                        </div>
                        <div className={[styles.topBtnsBar, styles.exportBtnColor].join(' ')}>
                            {/* whats the purpose of the export and what file type? */}
                            <b className={styles.exportBtn}>Export</b>
                        </div>
                    </div>
                </div>
                <div className={styles.infoDiv}>
                    <div className={[styles.amountCard, styles.infoDivChild].join(' ')}>
                        <h1>Amount</h1>
                        {/* insert food cards 
                        probably auto generated food cards with like a loop that iterates through or something
                        for now ill put the divs and stuff for like the functionality
                        */}
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
                    <div className={[styles.nutritionCard, styles.infoDivChild].join(' ')}>
                        <h1>Nutrition</h1>
                        {/* insert star cards */}
                        <p>Total Score</p>
                        {/* insert stars */}
                        <h1>{/* number */} stars!</h1>
                        {/* insert ingredient cards*/}
                        <div>
                            <FoodCards foods={foodCards}/>
                        </div>
                    </div>
                    <div className={[styles.foodPrintCard, styles.infoDivChild].join(' ')}>
                        <h1>Foodprint</h1>
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
            className={styles.dropdownStyle}
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
            <p>{food.facts}</p>
        </div>
    );
  }
  