import { useState } from "react";
import "./FilterEmojis.css";
import { emojis } from "./emojis";
import { getTypes } from "./getTypes";
import Emojis from "../Emojis/Emojis";
import EmojisButtons from "../EmojisButtons/EmojisButtons";

const types = getTypes(emojis);

const FilterEmojis = () => {
  const [emojisFiltered, setEmojisFiltered] = useState([...emojis]);

  const filtrar = (type) => {
    setEmojisFiltered(
      emojis.filter((emoji) => emoji.type === type || type === "all")
    );
  };

  return (
    <div className="filter">
      <h3>Filter Emojis</h3>
      <Emojis emojisFiltered={emojisFiltered}/>
      <EmojisButtons types={types} filtrar={filtrar}/>
    </div>
  );
};

export default FilterEmojis;