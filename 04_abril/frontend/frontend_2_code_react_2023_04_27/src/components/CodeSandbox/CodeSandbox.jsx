import React from "react";
import "./CodeSandbox.css";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

const CodeSandbox = () => {
  const [codigo, setCodigo] = useState(`<div></div>`);

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, ref) => {
    ref.current = editor;
  };

  return (
    <>
      <div className="editor">
        <h2>Escribe aquí el código de html que quisieras probar</h2>
        <Editor
          theme="vs-dark"
          className="editorHtml"
          height="20vh"
          defaultLanguage="html"
          defaultValue={codigo}
          onMount={(editor) => handleEditorDidMount(editor, editorRef)}
          onChange={() => setCodigo(editorRef.current.getValue())}
        />
      </div>
      <div className="editor">
        <h2>Aquí se verá el contenido que plasmes arriba</h2>
        <div
          className="renderizado"
          dangerouslySetInnerHTML={{ __html: codigo }}
        />
      </div>
    </>
  );
};

export default CodeSandbox;
