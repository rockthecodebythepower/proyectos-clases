import SyntaxHighlighter from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope";
import "./HowComponentsWork.css";

const HowComponentsWork = () => {

    let codeString = `<Button style="noseque">Texto del botón</Button>`;

  return (
    <div>
      <SyntaxHighlighter
        language="javascript"
        style={style}
        showLineNumbers
        wrapLines
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default HowComponentsWork;
