import "./Search.css"

const Search = ({text, handleInput, handleSubmit}) => {
  return (
    <div className="search">
      <input type="text" value={text} onChange={handleInput} />
      <button onClick={handleSubmit}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  )
}

export default Search
