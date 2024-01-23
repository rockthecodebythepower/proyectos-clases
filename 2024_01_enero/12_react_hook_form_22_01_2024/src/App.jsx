import { useState } from "react";
import "./App.css";
import LibraryForm from "./LibraryForm/LibraryForm";
import NativeForm from "./NativeForm/NativeForm";

const App = () => {
  const [showNativeForm, setShowNativeForm] = useState(false);

  return (
    <div>
      <header>
        <button onClick={() => setShowNativeForm(true)}>Nativo</button>
        <button onClick={() => setShowNativeForm(false)}>Librería</button>
      </header>
      {showNativeForm ? <NativeForm /> : <LibraryForm />}
    </div>
  );
};

export default App;
