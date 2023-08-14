import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body{
      background-color: ${(props) => props.theme.colors.primary};
      color:${(props) => props.theme.colors.secondary};
      font-family: ${(props) => props.theme.fonts.main};
      padding: 40px;
      margin: 40px;
      border: 1px dashed #444648;
    }

    li{
      list-style: none;
    }

    a{
      color: inherit;
      text-decoration: none;
    }

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: luminosity;
      filter: brightness(100%);
      
      &:hover{
      mix-blend-mode: normal;
      }
    }

    h1{
      font-family: ${(props) => props.theme.fonts.heading}
    }
`;

export default GlobalStyle;
