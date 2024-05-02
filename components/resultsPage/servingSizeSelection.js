import { useState } from "react";
import styles from "./styles/amountSelection.module.css";

export default function ServingSizeSelection({ curFood, updateServingSize }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleOutsideClick = (event) => {
    if (!event.target.classList.contains(styles.modalContent)) {
      handleModalClose();
    }
  };

  const handleServingSizeClick = (size) => {
    updateServingSize(curFood.id, size);
    handleModalClose();
  };

  const servingSizeDisplay = (size) => {
    switch (size) {
      case "half_teaspoon":
        return "1/2 teaspoon";
      case "teaspoon":
        return "1 teaspoon";
      case "tablespoon":
        return "1 tablespoon";
      case "third_cup":
        return "1/3 cup";
      case "half_cup":
        return "1/2 cup";
      case "cup":
        return "1 cup";
      default:
        return "No Selection";
    }
  };

  return (
    <div className={styles.amountBox}>
      <div className={styles.amountBoxSelect}>
        <button className={styles.amountBoxSelectBtn} onClick={handleModalOpen}>
          {servingSizeDisplay(curFood.serving_size) || "Select Serving Size"}
        </button>
      </div>
      {isModalOpen && (
        <div className={styles.modalBackground} onClick={handleOutsideClick}>
          <div className={styles.modalContent}>
            <button onClick={handleModalClose}>Close Modal</button>
            <div className={styles.servingSizeBtnsContainer}>
              {/* add images and stuff within these buttons! */}
              <button
                className={styles.servingSizeBtn}
                onClick={() => handleServingSizeClick("half_teaspoon")}
              >
                1/2 teaspoon
              </button>
              <button
                className={styles.servingSizeBtn}
                onClick={() => handleServingSizeClick("teaspoon")}
              >
                1 teaspoon
              </button>
              <button
                className={styles.servingSizeBtn}
                onClick={() => handleServingSizeClick("tablespoon")}
              >
                1 tablespoon
              </button>
              <button
                className={styles.servingSizeBtn}
                onClick={() => handleServingSizeClick("third_cup")}
              >
                1/3 cup
              </button>
              <button
                className={styles.servingSizeBtn}
                onClick={() => handleServingSizeClick("half_cup")}
              >
                1/2 cup
              </button>
              <button
                className={styles.servingSizeBtn}
                onClick={() => handleServingSizeClick("cup")}
              >
                1 cup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
