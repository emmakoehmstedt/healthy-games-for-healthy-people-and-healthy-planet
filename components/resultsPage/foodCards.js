import styles from "./styles/foodCards.module.css";
import Image from "next/image";

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
      <Image
        className={styles.foodcardimage}
        src={`/${imagePath}`}
        alt={name}
        width={470}
        height={520}
      />
      <p>{name}</p>
      <p>{food.facts}</p>
    </div>
  );
}
