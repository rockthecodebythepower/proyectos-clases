import { useState } from "react";
import { colors } from "./utils/colors";
import { Flex, Flex2, MiDivGuapo, Titulo } from "./App.styles";

const App = () => {
  const [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  const cambiarColor = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setUnderlined(!underlined);
  };

  const [underlined, setUnderlined] = useState(false);

  return (
    <Flex>
      <MiDivGuapo>
        <p>Esto es un <span>párrafo</span></p>
      </MiDivGuapo>
      <Titulo
        $colorProp={color}
        $underlined={underlined}
        onClick={cambiarColor}
      >
        Esto es mi h1
      </Titulo>
      <Flex2>
        <button>asldfkas</button>
        <button>aslkfaklsd</button>
      </Flex2>
    </Flex>
  );
};

export default App;