import { useState, useCallback } from "react";
import HoverCard from "../components/hover-card";

import { supabase } from "../lib/initSupabase";
import { useEffect } from "react";
import Layout from "../components/layouts/layout";
import ColorDropDown from "../components/mainFoodPage/colorDropDown";
import foods from "../data/food_images";

import PortalPopup from "../components/portal-popup";
import styles from "./mainFoodPage.module.css";

/*************************************************************************
 * Component:
 * Description:
 *************************************************************************/
const MainFoodCardsPage = () => {
  const [isHoverCardOpen, setHoverCardOpen] = useState(false);

  const [foodCards, setFoodCards] = useState([]);

  const [colorArray, setColorArray] = useState([]);

  const [colorFilter, setColorFilter] = useState("all");

  const [colorFilterId, setColorFilterId] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //TODO: Add function to supabase database so you can fetch the food with color
        const { data, error } = await supabase.rpc("getfoodcardinformation");

        console.log("Data: ", data);

        if (error) {
          throw error;
        }

        const foodsArray = data.map((food) => ({
          id: food.id,
          name: food.food_name,
          color_name: food.color_name,
          color_id: food.color_id,
        }));
        setFoodCards(foodsArray);
        console.log("Data from the table:", foodsArray);
      } catch (error) {
        console.error("Error fetching data from Supabase:", error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchColorData = async () => {
      try {
        //TODO: Add function to supabase database so you can fetch the food with color
        const { data, error } = await supabase.from("colors").select("*");

        console.log("Color Data: ", data);

        if (error) {
          throw error;
        }

        const colorArray = data.map((color) => ({
          id: color.color_id,
          name: color.color,
        }));
        setColorArray(colorArray);
        console.log("Data from the table:", colorArray);
      } catch (error) {
        console.error("Error fetching data from Supabase:", error.message);
      }
    };
    fetchColorData();
  }, []);

  const openHoverCard = useCallback(() => {
    setHoverCardOpen(true);
  }, []);

  const closeHoverCard = useCallback(() => {
    setHoverCardOpen(false);
  }, []);

  const onColorsDropdownFrameContainerClick = useCallback((val, id) => {
    // Please sync "Main Food Cards Page wtih Dropdown" to the project
    setColorFilter(val);
    setColorFilterId(id);
  }, []);

  return (
    <Layout>
      <div className={styles.mainFoodCardsPage}>
        <CalculatorSideBar />
        <div className="right-of-sidebar">
          <div className={styles.dropDownSearchContainer}>
            <ColorDropDown
              colors={colorArray}
              onColorClick={onColorsDropdownFrameContainerClick}
              selectedColor={colorFilter}
            />
            <SearchBar />
          </div>
          <FoodCards foods={foodCards} selectedColorId={colorFilterId} />
        </div>
      </div>

      {/* {isHoverCardOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeHoverCard}
        >
          <HoverCard onClose={closeHoverCard} />
        </PortalPopup>
      )} */}
    </Layout>
  );
};

export default MainFoodCardsPage;

function CalculatorSideBar() {
  return (
    <div className={styles.calculatorsidebarframe}>
      <div className={styles.youCurrentlyHaveContainer}>
        <span className={styles.youCurrentlyHaveContainer1}>
          <p className={styles.youCurrentlyHave}>
            You currently have nothing in your calculator!
          </p>
          <p className={styles.youCurrentlyHave}>&nbsp;</p>
          <p className={styles.youCurrentlyHave}>
            Hover over a food card to add it to the calculator
          </p>
        </span>
      </div>
      <b className={styles.myCalculator}>My Calculator</b>
      <img className={styles.calculatoricon} alt="" src="/calculatorIcon.png" />
    </div>
  );
}

function SearchBar({ handleSearch }) {
  return (
    <div className={styles.searchcardsframe}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by Name..."
        id="searchInput"
      />
      <button onClick={handleSearch}>
        <img className={styles.searchicon} alt="" src="/searchIcon.png" />
      </button>
    </div>
  );
}

function FoodCards({ foods, selectedColorId }) {
  return (
    <div className={styles.foodcardsframe}>
      {foods.map(
        (food) =>
          (selectedColorId == -1 || selectedColorId === food.color_id) && (
            <FoodCard key={food.id} id={food.id} name={food.name} />
          )
      )}
    </div>
  );
}

function FoodCard({ id, name }) {
  const food = foods.find((foodItem) => foodItem.id === id);
  if (!food) return null;
  const imagePath = food.image;
  return (
    <div className={styles.foodcard}>
      <img className={styles.foodcardimage} src={`/${imagePath}`} alt={name} />
      <p>{name}</p>
    </div>
  );
}
