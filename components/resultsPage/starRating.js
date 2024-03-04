import styles from "./styles/starRating.module.css";

/*************************************************************************
 * Component: TotalStarsCalculation
 * Description:
 *************************************************************************/
export default function TotalStarsCalculation({ numOfStars }) {
  const starsCount =
    typeof numOfStars === "number" && numOfStars > 0
      ? Math.floor(numOfStars)
      : 0;
  const starText = "⭐".repeat(starsCount);

  return (
    <div className={styles.totalStars}>
      <h2>Total Score</h2>
      <p>{starText}</p>
      <h1>{starsCount} stars!</h1>
    </div>
  );
}
