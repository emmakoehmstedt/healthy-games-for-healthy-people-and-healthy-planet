import { useCalculatorUpdate } from "../../context/calculatorContext";
import foodImages from "../../data/food_images";
import styles from "./styles/foodCards.module.css";

/*************************************************************************
 * Component: FoodCards
 * Description: This component loops through each food in the database (if
 * there is a filter set then it will only loop through the foods that
 * match the filter) and calls the FoodCard component to render each food
 * on the screen.
 *************************************************************************/
export default function FoodCards({
  foods,
  filteredFoodCards,
  selectedColorId,
}) {
  // If there filteredFoodCards is empty, then all cards should be displayed
  const cardsToRender =
    filteredFoodCards.length > 0 ? filteredFoodCards : foods;

  return (
    <div className={styles.foodcardsframe}>
      {cardsToRender.map(
        (food) =>
          (selectedColorId == -1 || selectedColorId === food.color_id) && (
            <FoodCard key={food.id} id={food.id} name={food.name} />
          )
      )}
    </div>
  );
}

/*************************************************************************
 * Component: FoodCard
 * Description: This renders an individual foodcard on the screen. It
 * uses the CalculatorContext to allow the food to be added and removed
 * from the calculator.
 *************************************************************************/
function FoodCard({ id, name }) {
  //get calculator functions from context
  const calculatorUpdateFunctions = useCalculatorUpdate();
  const food = foodImages.find((foodItem) => foodItem.id === id);

  if (!food) return null;
  const imagePath = food.image;

  return (
    <div className={styles.foodcard}>
      <img className={styles.foodcardimage} src={`/${imagePath}`} alt={name} />
      <p>{name}</p>
      {calculatorUpdateFunctions.isInCalculator(id) ? (
        <div
          className={styles.removeFoodButton}
          onClick={() => calculatorUpdateFunctions.onRemoveFromCalculator(id)}
        >
          <p className={styles.plusSign}>-</p>
        </div>
      ) : (
        <div
          className={styles.addFoodButton}
          onClick={() =>
            calculatorUpdateFunctions.onAddToCalculator({ id, name, imagePath })
          }
        >
          <p className={styles.plusSign}>+</p>
        </div>
      )}
    </div>
  );
}
