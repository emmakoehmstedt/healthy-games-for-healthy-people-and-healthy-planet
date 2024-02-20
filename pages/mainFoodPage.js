import { useState, useCallback } from "react";
import HoverCard from "../components/hover-card";

import { supabase } from "../lib/initSupabase";
import { useEffect } from "react";
import foods from "../data/food_images";

import PortalPopup from "../components/portal-popup";
import styles from "./mainFoodPage.module.css";

const MainFoodCardsPage = () => {
  const [isHoverCardOpen, setHoverCardOpen] = useState(false);

  const [foodCards, setFoodCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //TODO: Add function to supabase database so you can fetch the food with color
        const { data, error } = await supabase.from("foods").select("*");
        console.log("Data: ", data);

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
    fetchData();
  }, []);

  const openHoverCard = useCallback(() => {
    setHoverCardOpen(true);
  }, []);

  const closeHoverCard = useCallback(() => {
    setHoverCardOpen(false);
  }, []);

  const onColorsDropdownFrameContainerClick = useCallback(() => {
    // Please sync "Main Food Cards Page wtih Dropdown" to the project
  }, []);

  return (
    <>
      <div className={styles.mainFoodCardsPage}>
        <TopBar />
        <CalculatorSideBar />
        <div className={styles.dropDownSearchContainer}>
          <ColorDropDown onColorClick={onColorsDropdownFrameContainerClick} />
          <SearchBar />
        </div>
        <FoodCards foods={foodCards} />
        <Footer />
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
    </>
  );
};

export default MainFoodCardsPage;

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

function Footer() {
  return (
    <div className={styles.footerframe}>
      <img className={styles.dividerlineIcon} alt="" src="/dividerline.svg" />
      <img className={styles.osufootericon} alt="" src="/osufootericon.svg" />
      <b className={styles.collegeOfHealth}>College Of Health ASP3IRE Center</b>
      <b className={styles.oregonStateUniversitys}>
        Oregon State University’s Advancing Science, Practice, Programming and
        Policy in Research Translation for Children's Environmental Health
        Center
      </b>
    </div>
  );
}

function ColorDropDown({ onColorClick, selectedColor }) {
  return (
    <select
      className={styles.colorsdropdownframe}
      id="dropdown"
      value="allColors"
      onChange={onColorClick}
    >
      <option value="allColors">All Colors!</option>
      <option value="blue">Blue </option>
      <option value="green">Green </option>
      <option value="yellow">Yellow </option>
      <option value="purple">Purple </option>
    </select>
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

function FoodCards({ foods }) {
  return (
    <div className={styles.foodcardsframe}>
      {foods.map((food) => (
        <FoodCard key={food.id} id={food.id} name={food.name} />
      ))}
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
