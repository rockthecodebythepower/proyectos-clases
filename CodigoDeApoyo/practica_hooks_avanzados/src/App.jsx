import "./App.css";
import Timer from "./components/Timer/Timer";
import Calculator from "./components/Calculator/Calculator";
import { useTime } from "./customHooks/useTime";

const App = () => {
  
  const { date } = useTime();

  return (
    <div>
      <Timer date={date}/>
      <Calculator/>
    </div>
  );
};

export default App;
