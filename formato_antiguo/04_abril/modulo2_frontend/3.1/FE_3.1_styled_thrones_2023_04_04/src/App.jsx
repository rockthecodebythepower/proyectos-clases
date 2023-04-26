import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./pages/Characters";
import Spanish from "./lang/es.json";
import English from "./lang/en.json";
import { IntlProvider } from "react-intl";
import { Context } from "./shared/Conexto";

function App() {
  const [lang, setLang] = useState(Spanish);

  useEffect(() => {
    if (navigator.language === "es") {
      setLang(Spanish);
    } else if (navigator.language === "en") {
      setLang(English);
    } else {
      setLang(Spanish);
    }
  }, [])
  

  return (
    <>
      <Context.Provider value={{lang, setLang}}>
        <IntlProvider locale={navigator.language} messages={lang}>
          <Characters />
        </IntlProvider>
      </Context.Provider>
    </>
  );
}

export default App;
