import "./App.css";
import Container from "./components/Container/Container";
import UserRef from "./components/UseRef/UserRef";
import Wrapper from "./components/Wrapper/Wrapper";
import { NumProvider } from "./context/context";

function App() {
  return (
    <>
      <NumProvider>
        <Container />
        <Wrapper />
      </NumProvider>
      <UserRef/>
    </>
  );
}

export default App;
