import styles from "./styles/cookedRawDropDown.module.css";

/*************************************************************************
 * Component: CookedRawDropdown
 * Description: This component allows the user to select whether or not
 * their food is cooked or raw
 *************************************************************************/
export default function CookedRawDropDown({ onCRClick, selectedCook }) {
  return (
    <select
      id="dropdown"
      value={selectedCook}
      onChange={(e) => onCRClick(e.target.value)}
      className={styles.dropdownStyle}
    >
      <option value="cooked">Cooked</option>
      <option value="raw">Raw</option>
    </select>
  );
}
