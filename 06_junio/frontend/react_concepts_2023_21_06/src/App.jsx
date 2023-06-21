import "./App.css";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Flex from "./components/Flex/Flex";
import Input from "./components/Input/Input";

const App = () => {
  return (
    <>
      <Flex>
        <Title text="Esto es el título" />
        <Button>Haz click aquí</Button>
        <Button>Suscribete</Button>
        <Input />
      </Flex>
    </>
  );
};

export default App;
