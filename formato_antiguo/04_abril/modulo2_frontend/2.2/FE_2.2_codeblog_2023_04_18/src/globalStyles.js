import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
  --background: #11101b;
  --background-post: #1d1e2f;
  --primary: #f1edf3;
  --secondary: #f5781c;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: var(--background);
  color: var(--primary);
}

main {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

`

export default GlobalStyle
