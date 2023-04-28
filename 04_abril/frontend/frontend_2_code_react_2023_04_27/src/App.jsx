import { useState } from "react";
import "./App.css";
import CodeSandbox from "./components/CodeSandbox/CodeSandbox";
import Doc from "./components/Doc/Doc";
import Header from "./components/Header/Header";

function App() {
  
  const [showDoc, setShowDoc] = useState(true);

  return (
    <>
      <Header setShowDoc={setShowDoc}/>
      {showDoc ? <Doc/> : <CodeSandbox/>}
    </>
  );
}

export default App;
