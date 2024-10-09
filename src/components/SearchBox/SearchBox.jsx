import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.containerSearch}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search contact"
        className={css.inputSearch}
      />
    </div>
  );
};

export default SearchBox;
