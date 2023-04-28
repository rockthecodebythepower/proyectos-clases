import React, { useState } from "react";
import "./Element.css";
import { Editor } from "@monaco-editor/react";
import { languageIcons } from "../../data/doc";

const Element = ({ element }) => {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="titulo">
        <h3>{element.titulo}</h3>
        <img className="icon" src={languageIcons[element.lenguaje]}/>
        <img src="/assets/chevron-right.svg" className={visible ? "abajo" : "derecha"} onClick={() => setVisible(!visible)}/>
      </div>
      <Editor
        theme="vs-dark"
        className={visible ? "visible" : "no-visible"}
        defaultLanguage={element.lenguaje}
        defaultValue={element.contenido}
      />
    </div>
  );
};

export default Element;
