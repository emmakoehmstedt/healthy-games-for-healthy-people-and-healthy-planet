import styles from "./styles/search.module.css";

/*************************************************************************
 * Component: SearchBar
 * Description: Allow users to filter food cards by name.
 * Issues: At the moment the delete functionality is not working, expected
 *  behavior would be that the food cards start to reappear once you start
 *  to delete the characters. Seems like this may be an issues with the
 *  supabase fetch having null values at times or an unknown.
 *************************************************************************/
export default function SearchBar({ handleSearch, handleReset }) {
  const setSearchInput = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by Name"
        id="searchInput"
        onChange={setSearchInput}
      />
    </div>
  );
}
