import { useState, useCallback, useEffect } from "react";
import { supabase } from "../lib/initSupabase";
import { useRouter } from "next/router";

import Layout from "../components/layouts/layout";
import ColorDropDown from "../components/mainFoodPage/colorDropDown";
import CalculatorSideBar from "../components/mainFoodPage/calculatorSideBar";
import FoodCards from "../components/mainFoodPage/foodCards";
import SearchBar from "../components/mainFoodPage/search";

import styles from "./styles/mainFoodPage.module.css";

/*************************************************************************
 * Component: MainFoodCardsPage
 * Description: This component is responsible for displaying the main
 * food cards page. It displays the calculator, all of the foods in the
 * database, and allows for filtering options (color and name)
 *************************************************************************/
const MainFoodCardsPage = () => {
  const router = useRouter();

  const [foodCards, setFoodCards] = useState([]);

  const [colorArray, setColorArray] = useState([]);

  const [colorFilter, setColorFilter] = useState("all");

  const [colorFilterId, setColorFilterId] = useState(-1);

  const [searchInput, setSearchInput] = useState("");

  const [filteredFoodCards, setFilteredFoodCards] = useState([]);

  const onCalculatorClick = useCallback(() => {
    router.push("/resultsPage");
  }, [router]);

  //function to fetch foods with color information
  const fetchData = async () => {
    try {
      //function in database to fetch foods with color information
      const { data, error } = await supabase.rpc("getfoodcardinformation");

      if (error) {
        throw error;
      }
      //map each food to its own object
      const foodsArray = data.map((food) => ({
        id: food.id,
        name: food.food_name,
        color_name: food.color_name,
        color_id: food.color_id,
      }));
      setFoodCards(foodsArray);
      console.log("Main Food Cards Page -> Food Data:", foodsArray);
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //function to fetch color data
  useEffect(() => {
    const fetchColorData = async () => {
      try {
        //grab colors table from database
        const { data, error } = await supabase.from("colors").select("*");

        if (error) {
          throw error;
        }

        //map each color to a color object
        const colorArray = data.map((color) => ({
          id: color.color_id,
          name: color.color,
        }));
        setColorArray(colorArray);
        console.log("Main Food Cards Page -> Color Data:", colorArray);
      } catch (error) {
        console.error("Error fetching data from Supabase:", error.message);
      }
    };
    fetchColorData();
  }, []);

  const onColorsDropdownFrameContainerClick = useCallback((val, id) => {
    setColorFilter(val);
    setColorFilterId(id);
  }, []);

  const handleSearch = useCallback(
    (input) => {
      // Update search input state
      setSearchInput(input);

      // Filter food cards based on search input
      const filteredFoods = foodCards.filter((food) => {
        const nameMatches = food.name
          .toLowerCase()
          .includes(input.toLowerCase());
        // const colorMatches = colorFilter === "all" || food.color === colorFilter;
        return nameMatches; // && colorMatches;
      });
      // Update filtered food cards
      setFilteredFoodCards(filteredFoods);
    },
    [foodCards]
  );

  const resetFilter = () => {
    setSearchInput(""); // Reset search input
    setFilteredFoodCards([]); // Reset filtered food cards
  };

  const handleReset = () => {
    setSearchInput(""); // Reset search input
    //fetchData(); // Refetch data to ensure you have the latest
  };

  return (
    <Layout>
      <div className={styles.mainFoodCardsPage}>
        <CalculatorSideBar onCalcClick={onCalculatorClick} />
        <div className={styles.rightOfSidebar}>
          <div className={styles.dropDownSearchContainer}>
            <ColorDropDown
              colors={colorArray}
              onColorClick={onColorsDropdownFrameContainerClick}
              selectedColor={colorFilter}
            />
            <SearchBar handleSearch={handleSearch} handleReset={handleReset} />
            {/* Reset button to clear the input field */}
            <button className={styles.resetButton} onClick={resetFilter}>
              Reset
            </button>
          </div>
          <FoodCards
            foods={foodCards}
            filteredFoodCards={filteredFoodCards}
            selectedColorId={colorFilterId}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MainFoodCardsPage;

// function CalculatorSideBar({ foods, removeFromCalculator, clearCalculator }) {
//   return (
//     <div className={styles.calculatorsidebarframe}>
//       <div className={styles.myCalculatorHeader}>
//         <img
//           className={styles.calculatoricon}
//           alt=""
//           src="/calculatorIcon.png"
//         />
//         <b className={styles.myCalculatorTitle}>My Calculator</b>
//       </div>
//       <div className={styles.itemsInCalculatorFrame}>
//         {foods.length === 0 ? (
//           <div className={styles.nothingInCalculator}>
//             <p>You currently have nothing in your calculator!</p>
//           </div>
//         ) : (
//           <ul className={styles.foodsInCalculator}>
//             {foods.map((food) => (
//               <CalculatorFoodItem
//                 key={food.id}
//                 foodItem={food}
//                 removeFromCalculator={removeFromCalculator}
//               />
//             ))}
//           </ul>
//         )}
//       </div>
//       <div className={styles.bottomButtonsContainer}>
//         <div className={styles.calculateButton}>calculate</div>
//         {/* <div className={styles.clearCalcButton} onClick={clearCalculator}> */}
//         <div className={styles.clearCalcButton}>
//         {/* show popup first */}
//           clear calculation
//           <CalcErrorPrevent/>
//         </div>
//       </div>
//     </div>
//   );
// }

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

/*************************************************************************
 * Component: SearchBar
 * Description: Allow users to filter food cards by name. 
 * Issues: At the moment the delete functionality is not working, expected
 *  behavior would be that the food cards start to reappear once you start
 *  to delete the characters. Seems like this may be an issues with the 
 *  supabase fetch having null values at times or an unknown. 
 *************************************************************************/
// function SearchBar({ handleSearch, handleReset }) {
//   const setSearchInput = (e) => {
//     handleSearch(e.target.value);
//   };

//   return (
//     <div className={styles.searchBarContainer}>
//       <input
//         className={styles.searchInput}
//         type="text"
//         placeholder="Search by Name"
//         id="searchInput"
//         onChange={setSearchInput}
//       />
//     </div>
//   );
// }

// function FoodCards({
//   foods,
//   filteredFoodCards, // Receive filteredFoodCards as prop
//   selectedColorId,
//   addToCalculator,
//   onRemoveFromCalculator,
//   isInCalculator,
// }) {
//   const cardsToRender = filteredFoodCards.length > 0 ? filteredFoodCards : foods;

//   return (
//     <div className={styles.foodcardsframe}>
//       {cardsToRender.map((food) => (
//         (selectedColorId == -1 || selectedColorId === food.color_id) && (
//           <FoodCard
//             key={food.id}
//             id={food.id}
//             name={food.name}
//             addToCalculator={addToCalculator}
//             removeFromCalculator={onRemoveFromCalculator}
//             isInCalculator={isInCalculator}
//           />
//         )
//       ))}
//     </div>
//   );
// }


// function FoodCard({
//   id,
//   name,
//   addToCalculator,
//   removeFromCalculator,
//   isInCalculator,
// }) {
//   const food = foods.find((foodItem) => foodItem.id === id);

//   if (!food) return null;
//   const imagePath = food.image;

//   return (
//     <div className={styles.foodcard}>
//       <img className={styles.foodcardimage} src={`/${imagePath}`} alt={name} />
//       <p>{name}</p>
//       {isInCalculator(id) ? (
//         <div
//           className={styles.removeFoodButton}
//           onClick={() => removeFromCalculator(id)}
//         >
//           <p className={styles.plusSign}>-</p>
//         </div>
//       ) : (
//         <div
//           className={styles.addFoodButton}
//           onClick={() => addToCalculator({ id, name, imagePath })}
//         >
//           <p className={styles.plusSign}>+</p>
//         </div>
//       )}
//     </div>
//   );
// }