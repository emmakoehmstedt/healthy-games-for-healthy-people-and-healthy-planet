import { useState } from "react";
import styles from "./styles/colorDropDown.module.css";

/*************************************************************************
 * Component: ColorDropDown
 * Description: This component handles the sort by color functionality on
 * the main food page.
 *************************************************************************/
export default function ColorDropDown({ colors, onColorClick, selectedColor }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownStyle = {
    backgroundColor: selectedColor === "all" ? "white" : selectedColor,
  };

  function handleDropDownClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function handleDropDownSelect(val, id) {
    onColorClick(val, id);
    setIsOpen(false);
  }

  return (
    <div className={styles.customDropdown}>
      {isOpen ? (
        <div className={styles.openDropDown}>
          <div
            className={styles.dropDownItem}
            onClick={() => handleDropDownSelect("all", -1)}
          >
            All Colors!
          </div>
          {colors.map((color) => (
            <div
              key={color.id}
              onClick={() => handleDropDownSelect(color.name, color.id)}
              className={styles.dropDownItem}
            >
              <p>{color.name}</p>
              <div
                className={styles.dropDownColorBox}
                style={{ backgroundColor: color.name }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={dropDownStyle}
          className={styles.closedDropDown}
          onClick={handleDropDownClick}
        >
          {selectedColor === "all" ? (
            <p className={styles.allColorDropDown}>All Colors!</p>
          ) : (
            <p className={styles.colorDropDown}>{selectedColor}</p>
          )}
          <p>🔻</p>
        </div>
      )}
    </div>
  );
}
