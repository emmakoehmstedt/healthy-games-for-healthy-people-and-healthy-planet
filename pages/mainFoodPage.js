import { useState, useCallback } from "react";
import HoverCard from "../components/hover-card";

import { supabase } from "../lib/initSupabase";
import { useEffect } from "react";
import Layout from "../components/layouts/layout";
import ColorDropDown from "../components/mainFoodPage/colorDropDown";
import foods from "../data/food_images";

import PortalPopup from "../components/portal-popup";
import styles from "./mainFoodPage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

/*************************************************************************
 * Component:
 * Description:
 *************************************************************************/
const MainFoodCardsPage = () => {
  const [calculatorItems, setCalculatorItems] = useState([]);

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

  function onAddToCalculator(newFoodItem) {
    setCalculatorItems((prevFoods) => [newFoodItem, ...prevFoods]);
    console.log("Food: ", newFoodItem);
  }

  function onRemoveFromCalculator(id) {
    setCalculatorItems((prevFoods) =>
      prevFoods.filter((food) => food.id !== id)
    );
  }

  function isInCalculator(id) {
    return calculatorItems.some((item) => item.id === id);
  }

  function onClearCalculator() {
    setCalculatorItems([]);
  }

  const onColorsDropdownFrameContainerClick = useCallback((val, id) => {
    // Please sync "Main Food Cards Page wtih Dropdown" to the project
    setColorFilter(val);
    setColorFilterId(id);
  }, []);

  return (
    <Layout>
      <div className={styles.mainFoodCardsPage}>
        <CalculatorSideBar
          foods={calculatorItems}
          removeFromCalculator={onRemoveFromCalculator}
          clearCalculator={onClearCalculator}
        />
        <div className={styles.rightOfSidebar}>
          <div className={styles.dropDownSearchContainer}>
            <ColorDropDown
              colors={colorArray}
              onColorClick={onColorsDropdownFrameContainerClick}
              selectedColor={colorFilter}
            />
            <SearchBar />
          </div>
          <FoodCards
            foods={foodCards}
            selectedColorId={colorFilterId}
            addToCalculator={onAddToCalculator}
            onRemoveFromCalculator={onRemoveFromCalculator}
            isInCalculator={isInCalculator}
          />
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

function CalculatorSideBar({ foods, removeFromCalculator, clearCalculator }) {
  return (
    <div className={styles.calculatorsidebarframe}>
      <div className={styles.myCalculatorHeader}>
        <img
          className={styles.calculatoricon}
          alt=""
          src="/calculatorIcon.png"
        />
        <b className={styles.myCalculatorTitle}>My Calculator</b>
      </div>
      <div className={styles.itemsInCalculatorFrame}>
        {foods.length === 0 ? (
          <div className={styles.nothingInCalculator}>
            <p>You currently have nothing in your calculator!</p>
          </div>
        ) : (
          <ul className={styles.foodsInCalculator}>
            {foods.map((food) => (
              <CalculatorFoodItem
                key={food.id}
                foodItem={food}
                removeFromCalculator={removeFromCalculator}
              />
            ))}
          </ul>
        )}
      </div>
      <div className={styles.bottomButtonsContainer}>
        <div className={styles.calculateButton}>calculate</div>
        <div className={styles.clearCalcButton} onClick={clearCalculator}>
          clear calculator
        </div>
      </div>
    </div>
  );
}

function CalculatorFoodItem({ foodItem, removeFromCalculator }) {
  return (
    <li key={foodItem.id}>
      <div>
        <img src={`/${foodItem.imagePath}`} alt={foodItem.name} />
        <p>{foodItem.name}</p>
        <button onClick={() => removeFromCalculator(foodItem.id)}>
            <FontAwesomeIcon icon={faTrashCan} className={styles.removeButtonTrashIcon} />
        </button>
      </div>
    </li>
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

function FoodCards({
  foods,
  selectedColorId,
  addToCalculator,
  onRemoveFromCalculator,
  isInCalculator,
}) {
  return (
    <div className={styles.foodcardsframe}>
      {foods.map(
        (food) =>
          (selectedColorId == -1 || selectedColorId === food.color_id) && (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              addToCalculator={addToCalculator}
              removeFromCalculator={onRemoveFromCalculator}
              isInCalculator={isInCalculator}
            />
          )
      )}
    </div>
  );
}

function FoodCard({
  id,
  name,
  addToCalculator,
  removeFromCalculator,
  isInCalculator,
}) {
  const food = foods.find((foodItem) => foodItem.id === id);

  if (!food) return null;
  const imagePath = food.image;

  return (
    <div className={styles.foodcard}>
      <img className={styles.foodcardimage} src={`/${imagePath}`} alt={name} />
      <p>{name}</p>
      {isInCalculator(id) ? (
        <div
          className={styles.removeFoodButton}
          onClick={() => removeFromCalculator(id)}
        >
          <p className={styles.plusSign}>-</p>
        </div>
      ) : (
        <div
          className={styles.addFoodButton}
          onClick={() => addToCalculator({ id, name, imagePath })}
        >
          <p className={styles.plusSign}>+</p>
        </div>
      )}
    </div>
  );
}
