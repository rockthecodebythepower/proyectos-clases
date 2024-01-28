import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const ChangeTheme = () => {
  const { light, setLight } = useContext(ThemeContext);

  return (
    <Image
      src={light ? "/assets/sol.png" : "/assets/luna.png"}
      alt="cambiar de tema"
      w="100px"
      position="absolute"
      top="20px"
      right="20px"
      transition="all 0.5s"
      cursor="pointer"
      _hover={{
        transform: "scale(1.1)",
      }}
      onClick={() => setLight(!light)}
    />
  );
};

export default ChangeTheme;
