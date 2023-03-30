import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useFetchNasa } from "../../hooks/useFetchNasa";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const { images, loaded, error } = useFetchNasa(keyword);

  useEffect(() => {});
  return (
    <main>
      <h2>Search</h2>
      <SearchInput setKeyword={setKeyword} />
      {error && <h3>{error}</h3>}
      <ul>
        {loaded ? (
          images.map((img) => <Card key={img.data[0].nasa_id} img={img} />)
        ) : (
          <h2>Loading..</h2>
        )}
      </ul>
    </main>
  );
};

export default Search;
