import { useState } from "react";
import styles from "./styles/amountSelection.module.css";

export default function ServingAmountSelection({
  curFood,
  updateServingAmount,
}) {
  const [inputValue, setInputValue] = useState(
    curFood.serving_amount.toString()
  );

  //change what is displayed in input box as user types
  const handleInputChange = (e) => {
    const newValue = e.target.value.trim();
    setInputValue(newValue);
  };

  //this is called when the user presses enter or clicks out of the box
  const handleSelectionChange = (e) => {
    if (e.key === "Enter" || e.type === "blur") {
      const newValue = e.target.value.trim();
      //if they typed nothing, set value to default of 1 serving
      if (newValue == "") {
        setInputValue("1");
        updateServingAmount(curFood.id, 1);
        return;
      }
      //update serving amount to input number rounded to the 100ths place
      const floatValue = parseFloat(newValue);
      if (!isNaN(floatValue) && floatValue >= 0) {
        let roundedVal = Math.round(floatValue * 100) / 100;
        updateServingAmount(curFood.id, roundedVal);
        setInputValue(roundedVal);
      }
    }
  };

  return (
    <div>
      <input
        className={styles.inputBox}
        type="text"
        value={inputValue}
        placeholder="Type a number"
        onChange={handleInputChange}
        onBlur={handleSelectionChange}
        onKeyDown={handleSelectionChange}
      />
    </div>
  );
}
