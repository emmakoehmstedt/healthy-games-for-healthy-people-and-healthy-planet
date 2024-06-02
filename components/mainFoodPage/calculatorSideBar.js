import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/calculatorSideBar.module.css";
import {
  useCalculator,
  useCalculatorUpdate,
} from "../../context/calculatorContext";
import Image from "next/image";

/*************************************************************************
 * Component: CalculatorSideBar
 * Description: This component displays the calculator, which is a sidebar
 * that displays the foods that the user has selected for their
 * calculation. It has buttons to clear the calculator and to calculate
 *************************************************************************/
export default function CalculatorSideBar({ onCalcClick }) {
  const foods = useCalculator();
  const calculatorFunctions = useCalculatorUpdate();

  return (
    <div className={styles.calculatorsidebarframe}>
      <div className={styles.myCalculatorHeader}>
        <Image
          className={styles.calculatoricon}
          src="/calculatorIcon.png"
          alt={""}
          width={100}
          height={100}
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
          onClick={calculatorFunctions.onClearCalculator}
        >
          clear calculation
        </div>
      </div>
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
        <Image
          src={`/${foodItem.imagePath}`}
          alt={foodItem.name}
          width={100}
          height={100}
        />
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
