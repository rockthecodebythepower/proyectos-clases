import { ThemeProvider } from "styled-components";

const theme = {
  backgroundColor: 'yellow',
  color: 'white',
  extends: {}
}

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}