import "./App.css";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <>
      <Title>Title</Title>
      <Button action={() => console.log("Hola")}>Click</Button>
      <Button type="secondary" action={() => console.log("Adios")}>Secondary</Button>
      <Button type="warning" size="small">Warning</Button>
      <Button type="error" size="large">Error</Button>
    </>
  );
};

export default App;
