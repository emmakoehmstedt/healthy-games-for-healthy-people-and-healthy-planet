import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/starRating.module.css";

/*************************************************************************
 * Component: TotalStarsCalculation
 * Description:
 *************************************************************************/
export default function TotalStarsCalculation({ numOfStars }) {
  const maxStars = 5;
  const filledStars = Math.floor(numOfStars);
  let stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} className={styles.filledStar} />
    );
  }

  for (let i = filledStars; i < maxStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        color="d3d3d3"
        className={styles.emptyStar}
      />
    );
  }

  return <div className={styles.totalStars}>{stars}</div>;
}
