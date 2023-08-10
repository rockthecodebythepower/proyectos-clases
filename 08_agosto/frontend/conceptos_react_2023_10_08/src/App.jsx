import "./App.css";
import { useState } from "react";
import Movies from "./components/Movies";
import Shows from "./components/Shows";
import Button from "./components/Button/Button";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [category, setCategory] = useState("movies");

  const sumOne = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={sumOne}>Sumar</button>
      {category === "movies" ? (
        <Movies />
      ) : category === "shows" ? (
        <Shows />
      ) : (
        "No has seleccionado una categoria"
      )}
      <Button action={()=> setCategory("movies")}>Movies</Button>
      <Button action={()=> setCategory("shows")}>Shows</Button>
    </>
  );
};

export default App;
