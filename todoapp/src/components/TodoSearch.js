import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="What should you do?"
        onChange={onSearchValueChange}
        value={searchValue}
        name="searchValue"
      />
      <p>{searchValue}</p>
    </>
  );
}

export default TodoSearch;
