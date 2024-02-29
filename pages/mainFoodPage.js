import { useState, useCallback, useEffect } from "react";
import HoverCard from "../components/hover-card";
import { supabase } from "../lib/initSupabase";
import Layout from "../components/layouts/layout";
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
  const [colorFilter, setColorFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  

  const fetchData = async () => {
    try {
      //TODO: Add function to supabase database so you can fetch the food with color
      const { data, error } = await supabase.from("foods").select("*");

      if (error) {
        throw error;
      }

      const foodsArray = data.map((food) => ({
        id: food.id,
        name: food.food,
      }));
      setFoodCards(foodsArray);
      console.log("Data from the table:", foodsArray);
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  };
  const fetchData = async () => {
    try {
      //TODO: Add function to supabase database so you can fetch the food with color
      const { data, error } = await supabase.from("foods").select("*");

      if (error) {
        throw error;
      }

      const foodsArray = data.map((food) => ({
        id: food.id,
        name: food.food,
      }));
      setFoodCards(foodsArray);
      console.log("Data from the table:", foodsArray);
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resetFilter = () => {
    setSearchInput(""); // Reset search input
    // Fetch data with no filters (all cards)
    fetchData();
    // Ensure the input field is cleared
    document.getElementById("searchInput").value = "";
  };

  const openHoverCard = useCallback(() => {
    setHoverCardOpen(true);
  }, []);

  const closeHoverCard = useCallback(() => {
    setHoverCardOpen(false);
  }, []);

  const onColorsDropdownFrameContainerClick = useCallback((val) => {
    // Please sync "Main Food Cards Page wtih Dropdown" to the project
    setColorFilter(val);
  }, []);

  const handleSearch =useCallback((input) => {
    // Filter food cards based on search input
    const filteredFoods = foodCards.filter((food) => {
        const nameMatches = food.name.toLowerCase().includes(input.toLowerCase());
        // const colorMatches = colorFilter === "all" || food.color === colorFilter;
        return nameMatches// && colorMatches;
    });
    setFoodCards(filteredFoods);
  }, [foodCards]);

  const handleReset = () => {
    setSearchInput(""); // Reset search input
    // Fetch data with no filters (all cards)
    fetchData();
  };

  return (
    <Layout>
      <div className={styles.mainFoodCardsPage}>
        <CalculatorSideBar />
        <div className="right-of-sidebar">
          <div className={styles.dropDownSearchContainer}>
            <ColorDropDown
              onColorClick={onColorsDropdownFrameContainerClick}
              selectedColor={colorFilter}
            />
            <SearchBar handleSearch={handleSearch} handleReset={handleReset} /> 
            {/* Reset button to clear the input field */}
            <button className={styles.resetButton} onClick={resetFilter}>Reset</button>
          </div>
          <FoodCards foods={foodCards} />
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

/*************************************************************************
 * Component:
 * Description:
 *************************************************************************/
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

/*************************************************************************
 * Component:
 * Description:
 *************************************************************************/
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

/*************************************************************************
 * Component:
 * Description:
 *************************************************************************/
function ColorDropDown({ onColorClick, selectedColor }) {
  return (
    <select
      className={styles.colorsdropdownframe}
      id="dropdown"
      value={selectedColor}
      onChange={(e) => onColorClick(e.target.value)}
    >
      <option value="all">All Colors!</option>
      <option value="blue">Blue </option>
      <option value="green">Green </option>
      <option value="yellow">Yellow </option>
      <option value="purple">Purple </option>
    </select>
  );
}

/*************************************************************************
 * Component: SearchBar
 * Description: Allow users to filter food cards by name. 
 * Issues: At the moment the delete functionality is not working, expected
 *  behavior would be that the food cards start to reappear once you start
 *  to delete the characters. Seems like this may be an issues with the 
 *  supabase fetch having null values at times or an unknown. 
 *************************************************************************/
function SearchBar({ handleSearch, handleReset }) {
  const setSearchInput = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by Name"
        id="searchInput"
        onChange={setSearchInput}
      />
    </div>
  );
}
/*************************************************************************
 * Component:
 * Description:
 *************************************************************************/
function FoodCards({ foods }) {
  return (
    <div className={styles.foodcardsframe}>
      {foods.map((food) => (
        <FoodCard key={food.id} id={food.id} name={food.name} />
      ))}
    </div>
  );
}

/*************************************************************************
 * Component:
 * Description:
 *************************************************************************/
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
