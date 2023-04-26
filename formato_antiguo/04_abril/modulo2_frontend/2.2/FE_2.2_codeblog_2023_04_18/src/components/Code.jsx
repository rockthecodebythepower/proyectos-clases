import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter"
import {oneDark, oneLight} from "react-syntax-highlighter/dist/esm/styles/prism"
import ThemeBtn from "./ThemeBtn"
import CopyBtn from "./CopyBtn"
import styled from "styled-components"

const CodeStyled = styled.div`
  section {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`

const Code = ({children, language, isDark, setIsDark}) => {
  return (
    <CodeStyled>
      <section>
        <ThemeBtn isDark={isDark} setIsDark={setIsDark} />
        <CopyBtn text={children} />
      </section>
      <SyntaxHighlighter
        style={isDark ? oneDark : oneLight}
        language={language}
      >
        {children}
      </SyntaxHighlighter>
    </CodeStyled>
  )
}

export default Code
