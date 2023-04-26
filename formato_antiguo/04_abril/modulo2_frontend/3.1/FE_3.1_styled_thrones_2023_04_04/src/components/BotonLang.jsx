import React, { useContext } from 'react'
import { Context } from '../shared/Conexto';
import Spanish from "../lang/es.json";
import English from "../lang/en.json";

const BotonLang = () => {

    const { lang, setLang } = useContext(Context);

  return (
    <div>
        {lang === English && <button onClick={() => setLang(Spanish)}>Español</button>}
        {lang === Spanish && <button onClick={() => setLang(English)}>Ingles</button>}
    </div>
  )
}

export default BotonLang