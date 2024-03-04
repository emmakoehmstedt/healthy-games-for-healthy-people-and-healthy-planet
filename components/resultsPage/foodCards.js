import styles from "./styles/foodCards.module.css";

/*************************************************************************
 * Component: FoodCards
 * Description:
 *************************************************************************/
export default function FoodCards({ foods }) {
  return (
    <div>
      {/* <div className={styles.foodcardsframe}> */}
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          facts={food.facts}
        />
      ))}
    </div>
  );
}

/*************************************************************************
 * Component: FoodCard
 * Description:
 *************************************************************************/
function FoodCard({ id, name }) {
  const food = foods.find((foodItem) => foodItem.id === id);
  if (!food) {
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
