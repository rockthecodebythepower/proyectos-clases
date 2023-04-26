import "./SearchInput.css";

const SearchInput = ({ setKeyword }) => {
  return <input type="text" onChange={(ev) => setKeyword(ev.target.value)} />;
};

export default SearchInput;
