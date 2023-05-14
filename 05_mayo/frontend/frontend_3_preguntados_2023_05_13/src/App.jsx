import { useState } from "react";
import "./App.css";
import Coronas from "./components/Coronas/Coronas";
import Ruleta from "./components/Ruleta/Ruleta";
import { Box } from "@chakra-ui/react";
import Pregunta from "./components/Pregunta/Pregunta";
import Acertadas from "./components/Acertadas/Acertadas";
import { CORONAS_INITIAL_STATE } from "./data/coronas";
import Option from "./components/Option/Option";

function App() {
  const [coronas, setCoronas] = useState(CORONAS_INITIAL_STATE);
  const [tipoPregunta, setTipoPregunta] = useState();
  const [acertadas, setAcertadas] = useState(0);

  return (
    <Box>
      <Coronas coronas={coronas} />
      <Ruleta size={300} buttonColor="white">
        <Option text="Pepito" color="orange"/>
        <Option text="Pepazo" color="blue"/>
        <Option text="Enrique" color="Yellow"/>
      </Ruleta>
      {/* <Pregunta
        tipoPregunta={tipoPregunta}
        setTipoPregunta={setTipoPregunta}
        setCoronas={setCoronas}
        setAcertadas={setAcertadas}
      /> */}
      <Acertadas acertadas={acertadas} />
    </Box>
  );
}

export default App;
