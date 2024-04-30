import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/calculatorSideBar.module.css";
import {
  useCalculator,
  useCalculatorUpdate,
} from "../../context/calculatorContext";
import CalcErrorPrevent from "./calcErrorPrevent-popup";

/*************************************************************************
 * Component: CalculatorSideBar
 * Description: This component displays the calculator, which is a sidebar
 * that displays the foods that the user has selected for their
 * calculation. It has buttons to clear the calculator and to calculate
 *************************************************************************/
export default function CalculatorSideBar({ onCalcClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearButtonClick = () => {
    // Show the modal when the clear button is clicked
    setIsModalOpen(true);
    console.log("true");
  };

  const handleCloseModal = () => {
    // Close the modal when it's dismissed
    setIsModalOpen(false);
    console.log("false  ");
  };

  const foods = useCalculator();
  const calculatorFunctions = useCalculatorUpdate();

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
              <CalculatorFoodItem key={food.id} foodItem={food} />
            ))}
          </ul>
        )}
      </div>
      <div className={styles.bottomButtonsContainer}>
        {foods.length > 0 && (
          <div className={styles.calculateButton} onClick={onCalcClick}>
            calculate
          </div>
        )}
        <div
          className={styles.clearCalcButton}
          // onClick={calculatorFunctions.onClearCalculator}
          onClick={handleClearButtonClick}
        >
          clear calculation
          <CalcErrorPrevent/>
          {isModalOpen && <CalcErrorPrevent onClose={handleCloseModal} />}
        </div>
      </div>
      {/* Render the modal only if isModalOpen is true */}
    </div>
  );
}

/*************************************************************************
 * Component: CalculatorFoodItem
 * Description: This component displays an individual calculator item.
 * It has a trash can button so it can be removed from the calculator.
 * It displays the name and an image of the food.
 *************************************************************************/
function CalculatorFoodItem({ foodItem }) {
  const calculatorFunctions = useCalculatorUpdate();
  return (
    <li key={foodItem.id}>
      <div>
        <img src={`/${foodItem.imagePath}`} alt={foodItem.name} />
        <p>{foodItem.name}</p>
        <button
          onClick={() =>
            calculatorFunctions.onRemoveFromCalculator(foodItem.id)
          }
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            className={styles.removeButtonTrashIcon}
          />
        </button>
      </div>
    </li>
  );
}
