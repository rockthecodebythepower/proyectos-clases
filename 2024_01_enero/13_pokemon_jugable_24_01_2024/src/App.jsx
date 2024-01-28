import { Box } from "@chakra-ui/react";
import ChangeTheme from "./components/ChangeTheme/ChangeTheme";
import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coliseum from "./pages/Coliseum/Coliseum";

const App = () => {
  const { light } = useContext(ThemeContext);

  console.log(light);

  return (
    <Box
      minH="100svh"
      bg={`var(--rtc-${light ? "light" : "dark"}-mode-bg)`}
      color={`var(--rtc-${light ? "light" : "dark"}-mode-text)`}
      transition="all 0.3s"
    >
      <ChangeTheme />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coliseum/:id" element={<Coliseum />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;